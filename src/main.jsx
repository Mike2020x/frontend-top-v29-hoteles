import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import "./main.scss";
import { HotelProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HotelProvider>
      <RouterProvider router={Router} />
    </HotelProvider>
  </React.StrictMode>
);
