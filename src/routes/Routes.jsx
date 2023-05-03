import { createBrowserRouter, } from "react-router-dom";
import Home from "../Home/Home";
import Recipes from "../components/Recipes";
import Login from "../Login/Login";
import Register from "../Login/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/recipes/:resId',
        element: <Recipes></Recipes>,
        loader: ({params})=>fetch(`https://foodies-heaven-server-soyedarif.vercel.app/recipies/${params.resId}`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
  
])

export default router;