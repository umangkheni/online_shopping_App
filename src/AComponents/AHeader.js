import React from 'react'
import { Link } from 'react-router-dom'

export default function AHeader() {

  const removeCookie =()=>{

    document.cookie = 'pass=admin; max-age=-1; '
    document.cookie = 'UName=admin; max-age=-1; '
    window.location.reload();
  };
  return (
    <div className='A-Header d-flex justify-content-center align-items-center position-fixed flex-column' >
        <h1> ADMIN </h1>
      <div className='d-flex align-items-center flex-column justify-content-start'>

        <Link to={'/admin/add'} href>Add Product</Link>
        <Link to={"/admin"}>All Product</Link>
        <Link to={"/admin/user"}>User List</Link>
        
      </div>
      <a className='logout' onClick={()=>{removeCookie()}} href>Logout</a>
    </div>
  )
}
