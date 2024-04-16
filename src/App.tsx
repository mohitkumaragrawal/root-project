// import { Button } from "./components/ui/button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/Result";
import Layout from "./pages/layout";
import Index from "./pages/index";
import Gallary from "./pages/Gallary";
import Admin from "./pages/admin";
import VendorPage from "./pages/vendor";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/index",
        element: <Index />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },

      {
        path: "/vendor",
        element: <VendorPage />,
      },

      {
        path: "/vendor/:vendor",
        element: <Index />,
      },

      {
        path: "/vendor/:vendor/:id",
        element: <Result />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
