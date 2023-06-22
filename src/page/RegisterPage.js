import React,{useEffect} from 'react'
import Register from '../components/Register'

export default function RegisterPage() {
  useEffect(() => {
    const user = localStorage.getItem('user-info');
    if(user){
      window.location.href = '/'
    }
  });
  return (
    <div className='r-box d-flex flex-column align-items-center justify-content-center'>
    <Register/> 
    </div>
  )
}
