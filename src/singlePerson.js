import React, { useContext } from 'react'
import { cartContext } from './context'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsStarFill, BsStarHalf} from "react-icons/bs"




const SinglePerson = ({prod}) => {
  const{cart, setCart}=useContext(cartContext)
  //const prod={id:Math.random(), title:name, price:price, image:img, describtion:describtion, rating:ratings}
const handler=()=>{
   setCart([...cart, prod])
}


console.log(cart, cart.includes(prod))
  return (
    <div className='single-product card  mx-2 mb-4  '>
       
       <img src={prod.image} className="product-image card-img-top image-fluid mt-3" alt={prod.name}></img>
       <div className='card-body d-flex flex-column justify-content-between p-2 '>
         <h4 className='card-title text-center'>{prod.title.slice(0, 20)}</h4>
        <h6 className='card-text mx-3'>${prod.price}</h6>
        <span className='mx-3'><span><span  className='inner-star'><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></span></span>
         <h6>rated {prod.rating.rate}</h6>
         </span>
         {cart.includes(prod) ? (<button onClick={()=>{setCart(cart.filter((obj)=>prod.id!==obj.id))}} className="btn btn-outline-danger mx-auto" style={{  position:"relative",
          bottom: "2px"}}>REMOVE </button>):
         (<button onClick={()=>{handler()}} className="btn btn-outline-primary mx-auto" style={{  position:"relative",
          bottom: "2px"}}>ADD TO CART</button>)}
         
         </div>
    </div>
  )
}

export default SinglePerson