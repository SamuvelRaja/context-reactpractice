import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    
         <div className='navbar navbar-light bg-secondary header d-flex justify-content-center'  >
    
        <Link to="/" className='header-link'>Home</Link>
     
        <Link to="/Cart" className='header-link '>Selected</Link>
     
    </div>
   
  )
}

export default Header
