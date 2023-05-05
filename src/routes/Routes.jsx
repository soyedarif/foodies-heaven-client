import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Recipes from "../components/Recipes";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRouter from "./PrivateRouter";
import Blog from "../Home/Blog";
import Main from "../Home/Main";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipes/:resId",
        element: (
          <PrivateRouter>
            <Recipes></Recipes>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`https://foodies-heaven-server-soyedarif.vercel.app/recipies/${params.resId}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
