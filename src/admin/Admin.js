import React from "react";
// import ReactDOM from "react-dom/client";
import "../assets/css/style.css";
import AddProduct from "./addProduct";
import AllProduct from "./AllProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Admin() {
  return (
    <Router>
    <h1>jbudshdhiebvuwer</h1>
    <Routes>
      <Route path="/admin/add" element={<AddProduct />} />
      <Route path="/admin/" element={<AllProduct/>} />
    </Routes>
  </Router>
  )
}


