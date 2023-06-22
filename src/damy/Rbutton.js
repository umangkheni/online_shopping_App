import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Rbutton() {
   const dispatch =  useDispatch()
   useSelector((store)=>{
    console.log(store.updown);

   })
    
  return (
    <div>
        <button onClick={()=>{
            dispatch({type: "inc"})
        }}>invriment</button>
      
    </div>
  )
}
