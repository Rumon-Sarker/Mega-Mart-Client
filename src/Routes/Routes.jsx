import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Shop from "../pages/Shop/Shop";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";
import Collections from "../pages/Collections/Collections";

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

            }
        ]
    },
]);