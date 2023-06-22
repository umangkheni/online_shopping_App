import React,{Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// style
import "./assets/css/style.css";
import "./assets/css/admin.css";
import Button from '@mui/joy/Button';


// components for user
import Header from "./components/Header";
import Home from "./page/home";
import OneProducts from "./page/OpenProducts";
import Login from "./page/Login";
import RegisterPage from "./page/RegisterPage";
import Products from "./components/Products";

// components for admin
import AHeader from "./AComponents/AHeader";
import AllProduct from "./admin/AllProduct";
import AddProduct from "./admin/addProduct";
import AdminLogin from "./AComponents/ALogin";
import UserList from "./admin/UserList";
import Rbutton from "./damy/Rbutton"

import { Provider } from "react-redux";
import store from "./store";


// Q

// import Q_1 from "./damy/Q-1"

// redirect for root
const Root = document.getElementById("root");
const root = ReactDOM.createRoot(Root);

// import url
let location = window.location.href;
console.log(location.slice(22, 27));



if (location.slice(22, 27) === "admin") {
  if (document.cookie) {
    root.render(
      <Suspense fallback={<Button loading variant="plain">
      Plain
    </Button>}>

  <Router>
        <AHeader />
        <Routes>
          <Route path="/admin/add"element={<AddProduct />} />
          <Route path="/admin" element={<AllProduct />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/user" element={<UserList />} />
            </Routes>
      </Router>
      </Suspense>)
  } else {
    root.render(
      <Suspense fallback={<Button loading variant="plain">
      Plain
    </Button>}>
      <Router>
        <AdminLogin />
        {/* <Routes></Routes> */}
      </Router>
      </Suspense>
    );
  }
  // console.log(location);
} else {
  root.render(
    <Suspense fallback={
    <Button loading variant="plain">
    Plain
   </Button>
  //  console.log("lodding....")
   }>
  {/*{setTimeout(()=>{

    return( */}
      <Router> 
      <Header />
      {/* <Q_1></Q_1> */}
      <Provider store={store}>
      <Rbutton/>
      </Provider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<OneProducts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Product" element={<Products />} />
      </Routes>
    </Router>
    {/* )

  },200) */}

  {/* } */}
    </Suspense>

  );
}