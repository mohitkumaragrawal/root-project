// import { Button } from "./components/ui/button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/Result";
import Layout from "./pages/layout";
import Index from "./pages/index";
import Gallary from "./pages/Gallary";
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
