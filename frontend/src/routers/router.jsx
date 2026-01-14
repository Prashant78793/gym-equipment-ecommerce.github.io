import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cartpage from "../pages/products/Cartpage";
import CheckoutPage from "../pages/products/CheckoutPage";
import AllProducts from "../pages/products/AllProducts";
import SingleProduct from "../pages/products/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/products/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import UserDashboard from "../pages/dashboard/users/UserDashboard";
import AddProduct from "../pages/dashboard/AddProduct/AddProduct";
import ManageProducts from "../pages/dashboard/manageProducts/ManageProducts";
import UpdateProduct from "../pages/dashboard/EditProduct/UpdateProduct";
import Contact from "../components/Contact";   
import About from "../components/About";        
import OnlinePaymentPage from "../pages/products/OnlinePaymentPage";  
import Ai from "../pages/home/Ai" // ✅ Import Online Payment Page

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
  path: "/ai",
  element: <Ai />,
},
,
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/online-payment",   // ✅ New Online Payment Route
        element: (
          <PrivateRoute>
            <OnlinePaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "edit-product/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
