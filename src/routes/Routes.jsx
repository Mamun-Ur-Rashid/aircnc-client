import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";

import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/', 
                element:<Home></Home>          
             },
            
             {
                path:'signUp',
                element:<SignUp></SignUp>
             }
        ]
    },
    {
        path:'login',
        element:<Login></Login>
     },
])