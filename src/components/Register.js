import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  // const navigate = useNavigate();
  const Loginbutton = () => {
    var UName = document.getElementById("UName").value;
    var UEmail = document.getElementById("UEmail").value;
    var UPass = document.getElementById("UPass").value;
    var RPass = document.getElementById("RPass").value;
    var data = {
      UName: UName,
      UEmail: UEmail,
      UPass: UPass,
      RPass: RPass,
    };
    if (!UName) {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "User Name NOT add!";
    } else if (!UEmail) {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "Email Address NOT add!";
    } else if (!UPass) {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "Password NOT add!";
    } else if (!RPass) {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "Re Password NOT add!";
    } else {
      if (UPass === RPass) {
        const result = axios.post("http://localhost:3000/user", data);
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(data));
        // navigate('/');
        window.location.href = "/";
      } else {
        document.getElementById("Message").style.color = "Red";
        document.getElementById("Message").innerHTML =
          "Passwords do NOT match!";
      }
    }
  };

  let SPassword = true;

  return (
    <div className="login-box d-flex flex-column align-items-center justify-content-center">
      <h2>Create your account</h2>
      <input type="text" id="UName" placeholder="User Name" />
      <input type="email" id="UEmail" placeholder="Email Address" />
      <input type="text" id="UPass" placeholder="Password" />
      <input
        type={SPassword ? "password" : "text"}
        id="RPass"
        placeholder="Conform  Password"
      />
      <span id="Message"> </span>
      <button
        onClick={() => {
          Loginbutton();
        }}
        type="submit"
      >
        Register Her
      </button>
      <p>
        Have an account? <Link to={"/Login"}>Login Now</Link>{" "}
      </p>
    </div>
  )
};
