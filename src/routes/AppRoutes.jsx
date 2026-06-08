import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      // {
      //   path: "Wizards",
      //   element: <Wizards />
      // },
      // {
      //   path: "Elixirs",
      //   element: <Elixirs />
      // },
      // {
      //   path: "Archives",
      //   element: <Archives />
      // }
    ]
  }
]);
