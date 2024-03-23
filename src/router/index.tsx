import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default Router;
