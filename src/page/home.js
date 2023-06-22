import React,{useEffect as UseEffect} from 'react'
import Slaider from '../components/Slaider'
import Products from '../components/Products'

export default function home() {

  let mod = localStorage.getItem("Modei");
  // console.log(mod);
  let Modtype = JSON.parse(mod);
  // console.log(Modtype);

  UseEffect(() => {
    if (Modtype) {
      let body = document.body
      body.style.color ="black"
      document.body.style.backgroundColor = "white";
    } else {
      let body = document.body
      body.style.color ="white"
      document.body.style.backgroundColor = "black";
    }
  }, [Modtype]);

  return (
    <div>
        <Slaider/>
        <div className="p-list">
        <Products/>
        </div>
        

      
    </div>
  )
}
