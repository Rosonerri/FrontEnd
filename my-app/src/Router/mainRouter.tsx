import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomeScreen from "../Component/Pages/HomeScreen";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
 
]);
