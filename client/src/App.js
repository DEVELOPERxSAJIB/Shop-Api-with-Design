import { RouterProvider } from "react-router-dom";
import publicRoutes from "./routes/publicRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrands, getAllCategory, getTagsSuccess } from "./redux/shop/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getTagsSuccess());
    dispatch(getAllCategory());
  });

  return <RouterProvider router={publicRoutes} />;
}

export default App;
