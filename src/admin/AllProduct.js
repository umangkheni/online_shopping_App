import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


export default function AllProduct() {
  const [Pdata, setPdata] = useState([]);
  const [Rindex, setRindex] = useState('')

  useEffect(() => {
    let result = axios.get("http://localhost:3000/product");
    result.then((d) => {
      console.log(d.data);
      setPdata(d.data);
    });
  }, [Rindex]);

  return (
    <div className="ad-main-box d-flex align-items-center flex-column ">
      <h1 className="add-h1">All Product List</h1>
      <div className="d-flex ap-table flex-column">
        <table className="text-center m-4 table-bordered table-striped table-light">
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Description</th>
            <th>Product Image</th>
            <th>Nevigation</th>
          </tr>
          {Pdata.map((Da, i) => {
            // console.log(Da);


           const ProductDelete = (id,i)=>{
            let result = axios.delete(`http://localhost:3000/product/${id}`);
            console.log(result);
            console.log(Pdata);
            setRindex(Rindex + 1);
            console.log(Rindex);
           };
            return (
              <tr className="thead-dark" key={i}>
                <td>{Da.id}.</td>
                <td style={{fontSize : "85%"}}>{Da.title.slice(0, 50)}...</td>
                <td>{Da.price}</td>
                <td style={{fontSize : "65%"}}>{Da.Details.slice(0, 80)}...</td>
                <td>
                  <img className="list-img" src={Da.imgUrl} alt="" />
                </td>
                <td>
                  {/* <Link to={'/admin/add'} state={{Da}} > */}
                    <Button variant="outlined"> Edit </Button>
                  {/* </Link> */}
                  <Button variant="outlined" onClick={()=>{ProductDelete(Da.id,i)}}>Delet</Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
