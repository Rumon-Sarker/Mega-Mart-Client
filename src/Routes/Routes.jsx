import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Shop from "../pages/Shop/Shop";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";
import Collections from "../pages/Collections/Collections";
import Carts from "../pages/Carts/Carts";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/shop",
                element: <Shop />

            },
            {
                path: "/contact",
                element: <ContactUs />

            },
            {
                path: "/about",
                element: <AboutUs />

            },
            {
                path: "/blogs",
                element: <Blogs />

            },
            {
                path: "/collections",
                element: <Collections />

            },
            {
                path: "/carts",
                element: <Carts />

            },
            {
                path: "/signin",
                element: <SignIn />

            },
            {
                path: "/signup",
                element: <SignUp />

            }
        ]
    },
]);