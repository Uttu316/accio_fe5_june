import { useEffect, useState } from "react";

const ProductList = () => {
  const [apiStatus, setApiStatus] = useState("loading");
  const [data, setData] = useState([]);

  const fetchData = () => {
    setTimeout(() => {
      setData([
        {
          title: "Product A",
          id: 2131213,
        },
        {
          title: "Product b",
          id: 3232323,
        },
        {
          title: "Product C",
          id: 4342342,
        },
        {
          title: "Product D",
          id: 434234249,
        },
      ]);
      setApiStatus("done");
    }, 4000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const isLoading = apiStatus === "loading";
  const hasData = apiStatus === "done" && data.length != 0;
  const noData = apiStatus === "done" && data.length === 0;
  return (
    <div>
      {isLoading && <h2>Loading data...</h2>}

      {hasData &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}

      {noData && <h2>No Data Available</h2>}
    </div>
  );
};
export default ProductList;
