import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div >
         <header >
    
        <Link to="/" className='header-link'>Home</Link>
     
        <Link to="/Cart" className='header-link'>Selected</Link>
     
    </header>
    </div>
  )
}

export default Header
