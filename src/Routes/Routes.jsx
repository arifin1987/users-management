import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/Users/UserDetails";
import Posts from "../pages/Posts/Posts";
import PostDetails from "../pages/Posts/PostDetails";
import RegistrationForm from "../pages/RegistrationForm/RegistrationForm";
import PriceOptions from "../pages/PriceOptions/PriceOptions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/users/:userId",

        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),

        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),

        element: <PostDetails />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: "/priceOptions",
        element: <PriceOptions />,
      },
    ],
  },
]);
