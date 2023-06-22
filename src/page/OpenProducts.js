import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rproduct from "../components/Rproduct.js";
import UserCart from "../api/UserCart.js"

export default function OneProducts() {
  let Id = useParams();
  // console.log(id.id);
  var id = Id.id;
  const [data, setdata] = useState([]);


     useEffect(() => {
    let result = axios.get(`http://localhost:3000/product/${id.id || id}`);
    result.then((Data) => {
      console.log(Data.data);
      setdata(Data.data);
    });
  
    //  console.log(result);
  },[id]);
  
  const AddToCart =(id)=>{
    let user = localStorage.getItem("user-info") 
    let userid = JSON.parse(user)
    console.log(userid.id);

    // let data = {Id:id}
    let data = {
    productId:id,
    productqu:1,
    userId: userid.id}
    // console.log(data);
    UserCart(data)

  }

  // console.log(data);
  // let FDetails = data.Details
  // console.log(FDetails);

  return (
    <div className="container">
      <div className="d-flex" style={{ width: "100%" }}>
        <img
          src={data.imgUrl}
          className="card-img-top"
          style={{ width: "50%", margin: "2%" }}
          alt="..."
        />
        <div className="card-body" style={{ width: "100%", margin: "2%" }}>
          <h2>{data.title}</h2>
          <h1 className="price">{data.price} ₹</h1>
          <div className="by-btn d-flex flex-column">
          <button onClick={()=>{
            AddToCart(data.id)
          }} >Add To Cart</button>
          <p>{data.Details}</p>
        </div>
        </div>
        
        
      </div>
      <Rproduct data="gg" />
    </div>
  );
}
