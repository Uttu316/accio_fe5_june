import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./productCard";
import { PRODUCT_DATA } from "../../data/product";
import styles from "./prodcutlist.module.css";
import { getProducts } from "../../services/getProducts";

const FILTERS = [
  {
    title: "All",
    value: "",
  },
  {
    title: "Men",
    value: "men's clothing",
  },
  {
    title: "Women",
    value: "women's clothing",
  },
  {
    title: "Electronics",
    value: "electronics",
  },
  {
    title: "Jwellery",
    value: "jewelery",
  },
];

const ProductList = ({ setCartItems, cartItems }) => {
  console.log("Product List");
  const [apiStatus, setApiStatus] = useState("loading");
  const [data, setData] = useState([]);
  const [selected, selectFilter] = useState("");
  const filterRef = useRef();

  const fetchData = useCallback(async () => {
    try {
      const products = await getProducts();
      setData(products);
      setApiStatus("done");
    } catch (e) {
      setApiStatus("error");
    }
  }, []);

  const onFilter = useCallback((category) => {
    selectFilter(category);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const isLoading = apiStatus === "loading";
  const hasData = apiStatus === "done" && data.length != 0;
  const noData = apiStatus === "done" && data.length === 0;
  const error = apiStatus === "error";

  //expensive calucluation
  const filteredProducts = useMemo(
    () =>
      data.filter((i) => {
        console.log(i);
        //selected all
        if (selected === "") {
          return true;
        }
        return selected === i.category;
      }),
    [selected, data]
  );

  useEffect(() => {
    if (filterRef.current) {
      let h3 = document.querySelector("h3");
      const reactH3 = filterRef.current;
      console.log("isEqual", h3 === reactH3, h3, reactH3);

      filterRef.current.style.color = "brown";
      filterRef.current.style.fontStyle = "italic";
    }
  }, [hasData, filterRef.current]);

  return (
    <div className={styles.productWrapper}>
      {isLoading && <h2 className={styles.loader}>Loading data...</h2>}

      {hasData && (
        <div className={styles.productContainer}>
          <div className={styles.productsFilters}>
            <h3 ref={filterRef}>Filters</h3>
            {FILTERS.map((filter, index) => (
              <button
                onClick={() => onFilter(filter.value)}
                className={`${styles.filter} ${
                  selected === filter.value ? styles.active : ""
                }`}
                key={index}
              >
                {filter.title}
              </button>
            ))}
          </div>
          <div className={styles.products}>
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            ))}
          </div>
        </div>
      )}

      {noData && <h2 className={styles.noProductmsg}>No Data Available</h2>}
      {error && <h2 className={styles.errorMsg}>Something went wrong</h2>}
    </div>
  );
};
export default ProductList;
