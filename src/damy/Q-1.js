import { Button } from "@mui/material";
import React, { useState } from "react";

const arr = ["paly cricket", "play video game", "reade books", "homework"];

export default function Q_1() {
  const [arre, setarre] = useState(arr);

  const Remov = (ie) => {
    let newerr = arre;
    let filterd = newerr.filter((el, i) => {
      return i !== ie;
    });

    newerr.splice(ie, ie + 1);

    setarre(filterd);
  };

  return (
    <div>
      <ul>
        {arre.map((type, index) => {
          return <Show data={type} i={index} f={Remov} />;
        })}
      </ul>
    </div>
  );
}

function Show(props) {
  const [first, setfirst] = useState(false);
  return (
    <li key={props.i}>
      <input
        type="checkbox"
        onChange={() => {
          setfirst(!first);
        }}
        id="box"
        value={true}
        name=""
      />
      {props.data}
      {first === true ? (
        <Button
          onClick={() => {
            props.f(props.i);
          }}
        >
          delet
        </Button>
      ) : null}
    </li>
  );
}
