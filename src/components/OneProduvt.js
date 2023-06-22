import React from "react";
import { Link } from "react-router-dom";

export default function OneProduvt(props) {
  // console.log(props.data);

  return (
    <Link key={props.i} to={`/product/${props.data.id}`}>
      <div className="card" style={{ width: "15rem" }}>
        <img src={props.data.imgUrl} className="card-img-top c-img" alt="..." />
        <div className="card-body d-flex flex-column">
          <h4 className="p-titel">{props.data.title.slice(0, 60)} ...</h4>
          <h2 className="">{props.data.price} ₹</h2>
        </div>
      </div>
    </Link>
  );
}
