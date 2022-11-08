import Main from "../../Pages/Layout/Main"
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
// import Login from "../../Pages/Login/Login";
// import Orders from "../../Pages/Orders/Orders";
// import SignUp from "../../Pages/SignUp/SignUp";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AllServices from "../../Pages/AllServices/AllServices"

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
        // {
        //   path: '/login', 
        //   element: <Login></Login>
        // },
        // {
        //   path: '/signup', 
        //   element: <SignUp></SignUp>
        // },
         {
          path: '/checkout/:id',
          element:<Checkout> </Checkout> ,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        // {
        //   path: '/orders',
        //   element: <Orders></Orders>
        // }

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