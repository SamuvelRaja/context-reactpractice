import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingCart} from "react-icons/fa"
import { useContext } from 'react'
import { cartContext } from './context'
import {Dropdown} from "react-bootstrap"

const Header = () => {
  const{state}=useContext(cartContext)
  console.log(state.cart)
  return (
    
     <div className='navbar navbar-light text-light bg-secondary header d-flex justify-content-around shadow-sm'  >
      <span>
        <Link to="/" className='header-link'>Home</Link>
     
        <Link to="/Cart" className='header-link '>Cart</Link>
        </span>
        <input placeholder='search here' className='input border-0 w-25 p-1 rounded'/>


         <Dropdown>
           <Dropdown.Toggle className='px-4' variant="success">
             
               <FaShoppingCart color="white" size={25}/>
               {state.cart.length} 
               </Dropdown.Toggle> 
             <Dropdown.Menu style={{ minWidth: 370 }}>
                  {
                       state.cart.length > 0 ? (
                    state.cart.map((obj)=>{
                     // console.log(obj.title.slice(0, 20))
                      return <span key={obj.id} className="d-flex dropdown-item justify-content-around align-items-center">
                       <img src={obj.image} alt={obj.title} className="image-fluid cart-image rounded-circle"/>
                       <h6>{obj.title.slice(0, 8)}</h6>
                       <h6 className='text'>{obj.price}</h6>
                        </span>
                    })):<h4>cart is empty!!</h4>
                  }
             </Dropdown.Menu>
         
          </Dropdown>
    </div>
   
  )
}

export default Header
