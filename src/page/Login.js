import React,{useEffect} from 'react';
import LoginC from '../components/LoginC';

export default function Login() {
  useEffect(() => {
    const user = localStorage.getItem('user-info');
    if(user){
      window.location.href = '/'
    }
  });
  return (
    <div className='l-box d-flex justify-content-center align-items-center '>
      <LoginC/>
    </div>
  )
}
