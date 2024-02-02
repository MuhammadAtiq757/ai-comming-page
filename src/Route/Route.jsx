
import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../Home/Home";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/Contact/About/About";





export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
               {
                path:'/contact',
                element: <Contact></Contact>
               },

               {
                path:'/about',
                element: <About></About>
               }
            
           
            ]
            
        }


    ]);
