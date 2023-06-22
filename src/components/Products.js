import React, { useEffect, useState } from "react";
import axios from "axios";
import OneProduvt from "./OneProduvt";

export default function OurProducts() {
  let [Data, setData] = useState([]);

  useEffect(() => {
    let result = axios.get("http://localhost:3000/product");
    // console.log(result);
    result.then((Data) => {
      console.log(Data.data);
      setData(Data.data);
    });

  }, []);

  // console.log(Data);

  return (
    <div className="container product d-flex flex-wrap justify-content-around">
      {Data.map((d,i) => {
        return <OneProduvt data={d} i={i} />;
      })}
    </div>
  );
}
