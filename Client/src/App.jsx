import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import {Layout,  RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";
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
          loader:listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader:singlePageLoader
        },
        
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage/>,
        },

        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>,
        },
        {
          path: "/add",
          element: <NewPostPage/>,
        },

      ]
    }
  ]);

  return (
    
    <RouterProvider router={router}/> 
  )
}

export default App