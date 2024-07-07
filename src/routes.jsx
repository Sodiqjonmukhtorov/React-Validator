import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Success from "./success.jsx";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);
