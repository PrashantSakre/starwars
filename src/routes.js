import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view",
    element: <View />
  }
]);

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes;