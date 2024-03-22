import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default Router;
