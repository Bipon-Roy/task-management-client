import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateTask from "../Pages/Dashboard/UpdateTask";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/updateTask/:id",
                element: <UpdateTask />,
            },
        ],
    },
]);
