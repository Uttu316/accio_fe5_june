import { BrowserRouter, Routes } from "react-router";

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};
export default Router;
