// import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import Orders from "./Components/Orders";
import Customers from "./Components/Customers";
import Settings from "./Components/Settings";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import AddProductPage from "./Components/AddProducts";
import AdminLoginPage from "./Components/AdminLogin";
import AddCustomerPage from "./Components/AddCustomer";
import Payment from "./Components/Payments";
import Shipment from "./Components/Shipment";
import Tracking from "./Components/Tracking";

function AdminPanel() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Admin/products" element={<Products />} />
            <Route path="/Admin/AddProducts" element={<AddProductPage />} />
            <Route path="/Admin/AdminLogin" element={<AdminLoginPage />} />
            <Route path="/Admin/AddCustomer" element={<AddCustomerPage />} />
            <Route path="/Admin/Payments" element={<Payment/>} />
            <Route path="/Admin/Shipment" element={<Shipment/>} />
            <Route path="Admin/Tracking" element={<Tracking/>} />
            <Route path="/Admin/orders" element={<Orders />} />
            <Route path="/Admin/customers" element={<Customers />} />
            <Route path="/Admin/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;