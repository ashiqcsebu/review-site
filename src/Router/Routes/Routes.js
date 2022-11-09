import Main from "../../Pages/Layout/Main"
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
 import MyReview from "../../Pages/MyReview/MyReview";
 import SignUp from "../../Pages/SignUp/SignUp";
 import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AllServices from "../../Pages/AllServices/AllServices"
import AddServices from "../../Pages/AllServices/AddServices";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
   element:<Main></Main> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
         {
          path: '/services/:id',
          element:<Checkout> </Checkout> ,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <MyReview></MyReview>,
        },
        {
          path: '/addservices',
          element: <PrivateRoute>  <AddServices></AddServices> </PrivateRoute>
      },

        {
          path: '/services',
          element: <AllServices> </AllServices>
      },
      {
        path: '/blog',
        element: <Blog> </Blog>
    },
      ]
    }
  ]);

  export default router;