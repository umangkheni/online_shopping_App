import React, { useRef as Usr, useEffect as UseEffect } from "react";
import axios from "axios";
import { useLocation as UseLocation, useNavigate as UseNavigate  } from "react-router-dom";

export default function addProduct() {
  const navigate = UseNavigate();
  const Title = Usr();
  const Price = Usr();
  const Img = Usr();
  const Dis = Usr();

  const location = UseLocation();
  const Pdata = location.state;
  console.log(Pdata);

  UseEffect(() => {
    if(Pdata){
    Title.current.value = Pdata.Da.title;
    Price.current.value = Pdata.Da.price;
    Img.current.value = Pdata.Da.imgUrl;
    Dis.current.value = Pdata.Da.Details;
  }
  });

  const addProduct = async () => {

    // update data
    if (Pdata) {
      let titel = Title.current.value;
      let price = Price.current.value;
      let img = Img.current.value;
      let Details = Dis.current.value;
      let data = {title: titel, Details: Details, imgUrl: img, price: price,  };
      if (titel && price && img && Details) {
        let result = await axios.put(
          `http://localhost:3000/product/${Pdata.Da.id}`,
          data
        );
        console.log(result);
        alert("Product Update Successfully");
        navigate("/admin");
      } else {
        alert("data ar mising");
      }



// add data
    } else {
      let titel = Title.current.value;
      let price = Price.current.value;
      let img = Img.current.value;
      let Details = Dis.current.value;
      let data = {
        title: titel,
        Details: Details, 
        imgUrl: img, 
        price: price,  };
      if (titel && price && img && Details) {
        let result = await axios.post("http://localhost:3000/product", data);
        console.log(result);
        alert("Product Add Successfully");
        navigate("/admin");
        // document.getElementById("title").value = "";
        // document.getElementById("price").value = "";
        // document.getElementById("img").value = "";
        // document.getElementById("dis").value = "";
      } else {
        alert("data is not fill proparly");
      }
    }
  };

  return (
    <div className="ad-main-box d-flex align-items-center flex-column ">
      <h1 className="add-h1">Add Product</h1>
      <div className="d-flex flex-column">
        <input id="title" ref={Title} type="text" placeholder="Product Name" />
        <input id="price" ref={Price} type="text" placeholder="Product Price" />
        <input
          type="text"
          ref={Img}
          name=""
          id="img"
          placeholder="Imange URL"
        />
        <textarea
          ref={Dis}
          name=""
          id="dis"
          cols="5"
          rows="3"
          placeholder="Product Full Details"
        ></textarea>
        <button
          type="submit"
          onClick={() => {
            addProduct();
          }}
        >
          {Pdata ? "update" : "add"} Data
        </button>
      </div>
    </div>
  );
}
