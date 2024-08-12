/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";
import SignUp from "./Components/SignUp.jsx";
import Login from "./Components/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/ReduxToolkit.jsx";
import AllPosts from "./Components/AllPosts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/all-posts", element: <AllPosts/> },
      { path: "/create-post", element: <CreatePost /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
