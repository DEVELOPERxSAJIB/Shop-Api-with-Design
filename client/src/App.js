import { RouterProvider } from "react-router-dom";
import publicRoutes from "./routes/publicRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrands, getAllCategory, getAllProducts, getTagsSuccess } from "./redux/shop/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getTagsSuccess());
    dispatch(getAllCategory());
    dispatch(getAllProducts());
  });

  return <RouterProvider router={publicRoutes} />;
}

export default App;
