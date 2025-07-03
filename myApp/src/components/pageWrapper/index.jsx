import ProductHeader from "../productHeader";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <ProductHeader />
      {children}
    </div>
  );
};

export default PageWrapper;
