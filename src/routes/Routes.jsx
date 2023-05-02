import { createBrowserRouter, } from "react-router-dom";
import Home from "../Home/Home";
import Recipes from "../components/Recipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/recipes/:resId',
        element: <Recipes></Recipes>,
        loader: ({params})=>fetch(`https://foodies-heaven-server-soyedarif.vercel.app/recipies/${params.resId}`)
    }
])

export default router;