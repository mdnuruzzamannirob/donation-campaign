import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import Card from "../pages/Card/Card";
import NotFoundPage from "../pages/Error/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/cards/:id",
        element: <Card></Card>,
        loader: () => fetch("/cards.json"),
      },
    ],
  },
]);
export default Router;
