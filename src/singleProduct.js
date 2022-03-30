import React, { useContext } from 'react'
import { cartContext } from './context'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from './Ratings';




const SingleProduct = ({prod}) => {
  const{state, dispatch}=useContext(cartContext)

const handler=(obj)=>{
  dispatch({
    type:"ADD_TO_CART",
    payload:obj
  })
}
const removeHandler=(obj)=>{
  dispatch({
    type:"REMOVE_FROM_CART",
    payload:obj
  })
}

  return (
    <div className='single-product card  mx-2 mb-4  '>
       
       <img src={prod.image} className="product-image card-img-top image-fluid mt-3" alt={prod.name}></img>
       <div className='card-body d-flex flex-column justify-content-between p-2 '>
         <h4 className='card-title text-center'>{prod.title.slice(0, 20)}</h4>
         <h6 className='card-text mx-3'>${prod.price}</h6>
        <span className='mx-3'>
           <Ratings rate={prod.rating.rate}/>
           <h6>rated {prod.rating.rate}</h6>
        </span>
         {state.cart.includes(prod) ? (<button 
         onClick={()=>{removeHandler(state.cart.filter((obj)=>prod.id!==obj.id))}}
          className="btn btn-outline-danger mx-auto" style={{  position:"relative",
          bottom: "2px"}}>REMOVE </button>):
         (<button
          onClick={()=>{handler(prod)}} className="btn btn-outline-primary mx-auto" 
          style={{  position:"relative",
          bottom: "2px"}}>ADD TO CART</button>)}
         
         </div>
    </div>
  )
}

export default SingleProduct