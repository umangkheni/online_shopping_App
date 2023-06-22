import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// setInterval(ALogin, 200000);

export default function ALogin() {
  const navigate = useNavigate();
  let user = { UName: "admin", Pass: "admin" };
  const UName = useRef();
  const Pass = useRef();
  
  const AdminLogin = () => {
    const Uname = UName.current.value;
    const pass = Pass.current.value;
    if (Uname === user.UName && pass === user.Pass) {
      const coki = "UName=admin ";
      const pas = "pass=admin";
      document.cookie = `${coki}; max-age=100000; secure`;
      document.cookie = `${pas}; max-age=100000; secure`;
      window.location.reload();
      navigate("/admin");
    } else {
      alert("incorect information");
    }
  };

  return (
    <div className="ad-main-box d-flex align-items-center flex-column ">
      <h1 className="add-h1">Admin Login</h1>
      <div className="d-flex flex-column">
        <input ref={UName} id="title" type="text" placeholder="User Name" />
        <input ref={Pass} id="price" type="text" placeholder="Password" />
        <button
          type="submit"
          onClick={() => {
            AdminLogin();
          }}
        >
          Login Now
        </button>
      </div>
    </div>
  );



}



