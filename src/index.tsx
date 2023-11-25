import "./assets/css/index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import HomeRoute from "./routes/HomeRoute";
import BMIRoute from "./routes/BMIRoute";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AuthRoute from "./routes/AuthRoute";
import ErrorPage from "./routes/ErrorPage";
import ShopRoute from "./routes/ShopRoute";
import CartRoute from "./routes/CartRoute";
import AccountRoute from "./routes/AccountRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/bmi",
    element: <BMIRoute />,
  },
  {
    path: "/auth",
    element: <AuthRoute />,
  },
  {
    path: "/shop",
    element: <ShopRoute />,
  },
  {
    path: "/cart",
    element: <CartRoute />,
  },
  {
    path: "/account",
    element: <AccountRoute />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
