import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
