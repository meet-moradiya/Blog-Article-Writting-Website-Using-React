import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/Login.js";
import AddPost from "./Components/Postform/PostForm.js";
import Signup from "./Components/Signup/Signup.js";
import Protected from "./Components/Protected/Protected.js";

import EditPost from "./Pages/EditPost.js";
import Post from "./Pages/Post/Post.js";
import AllPosts from "./Pages/AllPosts/AllPosts.js";
import Account from "./Pages/Account/Account.js";
import About from "./Pages/About/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Follow from "./Pages/Follow/Follow.js";
import UserPosts from "./Pages/UserPosts/UserPosts.js";

import store from "./Store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/account",
        element: (
          <Protected>
            {" "}
            <Account />
          </Protected>
        ),
      },
      {
        path: "/explore",
        element: (
          <Protected authentication>
            {" "}
            <AllPosts />
          </Protected>
        ),
      },
      {
        path: "/user-posts",
        element: (
          <Protected authentication>
            {" "}
            <UserPosts />
          </Protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/social-media",
        element: <Follow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
