import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./component/Dashboard";
import Sales from "./component/Sales";
import Analytics from "./component/Analytics";
import Payment from "./component/Payment";
import MerchantDetails from "./component/MerchantDetails";
import UserDetails from "./component/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/userdata" element={<Analytics />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/merchantdetails" element={<MerchantDetails />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
