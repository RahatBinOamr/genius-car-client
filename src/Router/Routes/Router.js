import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import CheckOut from "../../Check Out/CheckOut";
import Error from "../../Shared/Error";
import AddNewService from "../../Deshboard/AddService/AddNewService";
import Login from "../../Shared/Register/Login";
import Register from "../../Shared/Register/Register";
import Services from "../../Pages/Services/Services";
import Contact from "../../Shared/Contact/Contact";
import Products from "../../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../../Deshboard/Dashboard/DashboardLayout";
import ServiceDetailsCollection from "../../Pages/ServicesDetails/ServiceDetailsCollection";
import About from "../../Shared/About/About";
import OrderCollection from "../../Deshboard/OrderCollection/OrderCollection";
import OrderUpdate from "../../Deshboard/OrderCollection/OrderUpdate";
import MessageCollections from "../../Deshboard/MessageCollection/MessageCollections";
import AddProduct from "../../Deshboard/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetailsCollection />,
      },

      { path: "/Products", element: <Products /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/checkout/:id", element: <CheckOut /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/addNewService", element: <AddNewService /> },
      { path: "/dashboard/addProduct", element: <AddProduct /> },
      { path: "/dashboard/OrderCollection", element: <OrderCollection /> },
      { path: "/dashboard/OrderUpdate/:id", element: <OrderUpdate /> },
      { path: "/dashboard/MessageCollection", element: <MessageCollections /> },
    ],
  },
]);
export default router;
