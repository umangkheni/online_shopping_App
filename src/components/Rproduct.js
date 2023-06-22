import React,{useEffect, useState} from 'react';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';
import axios from 'axios';
import OneProduvt from './OneProduvt';



export default function Rproduct(props) {
  let [Data, setData] = useState([]);

  useEffect(() => {
    let result = axios.get("http://localhost:3000/product");
    // console.log(result);
    result.then((Data) => {
      console.log(Data.data);
      setData(Data.data);
    });
    
  }, []);

 

  return (
    <div className="product d-flex flex-wrap justify-content-around">
      {/* <Carousel> */}
      {Data.map((d,i) => {
        return <OneProduvt data={d} i={i} />;
      })}
      {/* </Carousel> */}
    </div>
  );
}
