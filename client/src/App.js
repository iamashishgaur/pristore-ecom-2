import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import CartScreen from "./pages/CartScreen";
import Profilescreen from "./pages/Profiescreen";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import ForgetPassword from "./pages/ForgetPassword";
import CreateNewPass from "./pages/CreateNewPass";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShippingScreen from "./pages/ShippingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderScreen from "./pages/OrderScreen";
import MyOrder from "./components/MyOrder";
import OrderCalender from "./pages/Admin/OrderCalender";
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import OrderChart from "./pages/Admin/OrderChart";
import OrderStatus from "./pages/Admin/OrderStatus";
import OrderInvoices from "./pages/Admin/OrderInvoices";
import OrderDetails from "./pages/Admin/OrderDeatils";
import ProfileCreate from "./pages/Admin/ProfileCreate";
import RecentOrder from "./pages/Admin/RecentOrder";
import CustomerList from "./pages/Admin/CustomerList";
import ProductCreate from "./pages/Admin/ProductCreate";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      <div className="app">
        {!isAdminRoute && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} />
          <Route path="/orderchart" element={<OrderChart />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/order-invoice" element={<OrderInvoices />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/product-create" element={<ProductCreate />} />
          <Route path="/profile-create" element={<ProfileCreate />} />
          <Route path="/recent-order" element={<RecentOrder />} />
          <Route path="/order-calender" element={<OrderCalender />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/create-newpass" element={<CreateNewPass />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {!isAdminRoute && <Footer />}
      </div>
    </>
  );
}

export default App;
