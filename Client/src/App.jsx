import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <Layout />
      ),
      children:[
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        }
      ]
    },
  ]);

  return (
    
    <RouterProvider router={router}/> 
  )
}

export default App