import Main from "../../Pages/Layout/Main"
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllServices from "../../Pages/AllServices/AllServices"
import AddServices from "../../Pages/AllServices/AddServices";
import Details from "../../Pages/Details/Details";
import MyReview from "../../Pages/MyReview/MyReview";
import EditeReview from "../../Pages/MyReview/EditeReview";

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
          element:<Details> </Details> ,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
       
        {
          path: '/addservices',
          element: <PrivateRoute>  <AddServices></AddServices> </PrivateRoute>
      },
      
       { path :'/Myreviews',
        element :<PrivateRoute>  <MyReview></MyReview> </PrivateRoute>
       },

        { path :'/edite/:id',
              element :<EditeReview></EditeReview>,
              loader : ({params}) => fetch(`http://localhost:5000/edite/${params.id}`)

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