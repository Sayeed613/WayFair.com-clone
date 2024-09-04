import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "../context/PrivateRoutes";
import Appliances from "../pages/Appliances";
import Furniture from "../pages/Furniture";
import HomeImporvement from "../pages/HomeImporvement";
import Lighting from "../pages/Lighting";
import Outdoor from "../pages/Outdoor";
import Cart from "../pages/Cart";
import Kitchen from "../pages/kitchen";
import ProductVewPage from "../pages/ProductVewPage";
import Orders from "../pages/Orders"


export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/appliances"
        element={
          <PrivateRoutes>
            <Appliances />
          </PrivateRoutes>
        }
      />
      <Route
        path="/product/view/:id"
        element={
          <PrivateRoutes>
            <ProductVewPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/furniture"
        element={
          <PrivateRoutes>
            <Furniture />
          </PrivateRoutes>
        }
      />

      <Route
        path="/homeimprovement"
        element={
          <PrivateRoutes>
            <HomeImporvement />
          </PrivateRoutes>
        }
      />
      <Route
        path="/kitchen"
        element={
          <PrivateRoutes>
            <Kitchen />
          </PrivateRoutes>
        }
      />
      <Route
        path="/lighting"
        element={
          <PrivateRoutes>
            <Lighting />
          </PrivateRoutes>
        }
      />
      <Route
        path="/outdoor"
        element={
          <PrivateRoutes>
            <Outdoor />
          </PrivateRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route
        path="/order"
        element={
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
