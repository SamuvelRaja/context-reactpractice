import React, { useContext } from 'react'
import { cartContext } from './context'
import SingleProduct from './singleProduct'

const Cart = () => {
  const {state}=useContext(cartContext)
  return (
    <div className='person d-flex flex-row flex-wrap justify-content-around  w-100 mt-4 cart '>
         {state.cart.map((obj)=>{
         
           //return <SinglePerson key={obj.id} name={obj.title} price={obj.price} img={obj.image} describtion={obj.description} ratings={obj.rating} />
           return <SingleProduct key={obj.id} prod={obj}/>
          }
        )
           }
        
    </div>
  )
}

export default Cart