import axios from "axios";
import React from "react";
import { Link, } from "react-router-dom";

export default function LoginC() {

  // const navigate = useNavigate();

  const login = () => {
    var UName = document.getElementById("UName").value;
    var Password = document.getElementById("Password").value;
    // var data = { UName: UName, RPass: Password };

    const result = axios.get(`http://localhost:3000/user?q=${UName}`);
    result
      .then((d) => {
        return d;
      }).then((data) => {
        const Data = data.data;
        if(Data.length === 0){
          // console.log(Data);
          document.getElementById("Message").style.color = "Red";
          document.getElementById("Message").innerHTML = "User name do NOT match!";
        }else{
          Data.map((data)=>{
            console.log(data.RPass);
            if (Password === data.RPass) {
              // if(Password.length === data.RPass.length){
                localStorage.setItem("user-info", JSON.stringify(data));
              // navigate('/')
              window.location.href = "/";
              return true;
              // }else{
              //   document.getElementById("Message").style.color = "Red";
              //   document.getElementById("Message").innerHTML = "Login Password cerecter mising!";
              //   return true;
              // }
            
              
            }else{
              document.getElementById("Message").style.color = "Red";
              document.getElementById("Message").innerHTML = "Login Password do NOT match!";
              return true;
            };
          }
          )
        };
        
        
      });
  };
  return (
    <div className="login-box d-flex flex-column align-items-center justify-content-center">
      <h2>Login to your account</h2>
      <input
        type="text"
        id="UName"
        placeholder="Enter User Name or Email Address"
      />
      <input type="text" id="Password" placeholder="Enter Password" />
      <span id="Message"></span>
      <button
        type="submit"
        onClick={() => {
          login();
        }}
      >
        Login Now
      </button>
      <p>
        Don't have an account? <Link to={"/Register"}>Create Now</Link>{" "}
      </p>
    </div>
  );
}
