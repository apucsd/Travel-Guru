import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main.jsx";
import Home from "../Components/Pages/Home/Home.jsx";
import News from "../Components/Pages/Others/News.jsx";
import Destination from "../Components/Pages/Others/Destination.jsx";
import Blog from "../Components/Pages/Others/Blog.jsx";
import Contact from "../Components/Pages/Others/Contact.jsx";
import Login from "../Components/Pages/Others/Login.jsx";
import Register from "../Components/Pages/Others/Register.jsx";
import AuthLayout from "../Components/Layouts/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/destination/:id",
        element: <Destination></Destination>,
        loader: () => fetch(`http://localhost:5000/destination`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/authentication",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/authentication/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
