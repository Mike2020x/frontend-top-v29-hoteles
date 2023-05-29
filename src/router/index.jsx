import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "Not Found",
    children: [
      {
        index: true,
        element: <Home />,
        // loader: loaderProducts,
      },
      {
        path: "pages",
        // element: <About />,
      },
      {
        path: "",
        // element: <ProductCard />,
        // loader: loaderProduct,
      },
    ],
  },
]);

export default router;
