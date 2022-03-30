import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingCart} from "react-icons/fa"
import { useContext } from 'react'
import { cartContext } from './context'

const Header = () => {
  const{state}=useContext(cartContext)
  return (
    
     <div className='navbar navbar-light text-light bg-secondary header d-flex justify-content-around shadow-sm'  >
      <span>
        <Link to="/" className='header-link'>Home</Link>
     
        <Link to="/Cart" className='header-link '>Cart</Link>
        </span>
        <input placeholder='search here' className='input border-0 w-25 p-1 rounded'/>


         <div className='dropdown'>
           <button className='btn dropdown-toggle btn-success px-4'>
             <span>
               <FaShoppingCart color="white" size={25}/>
               {state.cart.length} 
             </span>
             <div className='dropdown-menu'>
                  {
                    state.cart.map((obj)=>{
                      return <div>
                        <i
                        </div>
                    })
                  }
             </div>
            </button> 
          </div>
    </div>
   
  )
}

export default Header
