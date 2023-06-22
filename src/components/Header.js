import React, { useEffect,useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import SearchI from "../assets/image/search_FILL0_wght400_GRAD0_opsz48.svg";

// mui
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { styled } from '@mui/material/styles';
// import { Badge, BadgeProps } from '@admin-bro/design-system'

// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

export default function Header() {
  const user = localStorage.getItem("user-info");
  const [Modes, setmodes] = useState()

  // let Modei = false;
  let Mod = localStorage.getItem("Modei");
  
  console.log(Modes);
  let m = Modes
    // setmodes(JSON.parse(Mod))

  useEffect(() => {
    setmodes(JSON.parse(Mod))


    if (Modes) {
      let body = document.body
      body.style.color ="black"
      document.body.style.backgroundColor = "white";
    } else {
      let body = document.body
      body.style.color ="white"
      document.body.style.backgroundColor = "black";
    }
  },[Mod, Modes]);

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
      document.getElementById("Register").style.display = "none";
      document.getElementById("login").style.display = "none";
      document.getElementById("Logout").style.display = "block";
    } else {
      document.getElementById("Register").style.display = "block";
      document.getElementById("login").style.display = "block";
      document.getElementById("Logout").style.display = "none";
    }
  }, [user]);
  const logout = (n) => {
    localStorage.clear();
    const user = localStorage.getItem("user-info");
    if (user) {
      document.getElementById("Register").style.display = "none";
      document.getElementById("login").style.display = "none";
      document.getElementById("Logout").style.display = "block";
    } else {
      document.getElementById("Register").style.display = "block";
      document.getElementById("login").style.display = "block";
      document.getElementById("Logout").style.display = "none";
    }
  };
  const SearchBox = () => {};

  
  return (
    <div id="nev" className="nev d-flex justify-content-between">
      <div className="logodiv">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nev-menu d-flex justify-content-center ">
        <div className="menu d-flex">
          <Link href className="menu-hover" to={"/"} >
            Home
          </Link>
          <a href className="menu-hover">
            About
          </a>
          <Link href to={"/Product"} className="menu-hover">
            Our Glasses
          </Link>
          <a href className="menu-hover">
            Shop
          </a>
          <a href className="menu-hover">
            Contect Us
          </a>
          <Link id="login" to={"/Login"}>
            <button> Login </button>
          </Link>
          <Link id="Register" className="menu-hover" to={"/Register"}>
            Register
          </Link>
          <a
            onClick={() => {
              SearchBox();
            }}
            href
            className="menu-hover d-flex justify-content-center"
          >
            <img className="SearchI" src={SearchI} alt="" />
          </a>
          <a
            id="Logout"
            href
            onClick={() => {
              logout();
            }}
            className="menu-hover"
          >
            Logout
          </a>
        </div>
        <IconButton
          className="mode-btn"
          onClick={() => {
            // Mode();
          
          m =!m
    setmodes(m)
          
            console.log(Modes);
            localStorage.setItem("Modei", JSON.stringify(m));
          }}
          color="inherit"
        >
          {Modes ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        
        {/* <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton> */}


      </div>
    </div>
  );
}
