import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../Components/Layout/Layout";
import Camera from "../pages/Camera/Camera";
import Cart from "../pages/Cart/Cart";
import Wish from "../pages/WishPage/Wish";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Brands from "../Components/Brands/Brands";
import Tag from "../Components/Tag/Tag";
import Category from "../Components/Category/Category";
import Products from "../Components/Products/Products";
import Dashboard from "../Components/Dashboard/Dashboard";

// creare public <routes></routes>
const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />
      },
      {
        path: "/:slug",
        element: <SingleProduct />
      },
      {
        path: "camera",
        element: <Camera />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "wish",
        element: <Wish />
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "brand",
            element: <Brands />
          },
          {
            path: "tag",
            element: <Tag />
          },
          {
            path: "category",
            element: <Category />
          },
          {
            path: "product",
            element: <Products />
          }
        ]
      }
    ]
  }
]);

// export default
export default publicRoutes;
