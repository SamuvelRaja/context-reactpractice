import React, { useContext } from 'react'
import { cartContext } from './context'
import SinglePerson from './singlePerson'

const Cart = () => {
  const {cart, setCart}=useContext(cartContext)
  return (
    <div className='person d-flex flex-row flex-wrap justify-content-around  w-100 mt-4 cart '>
         {cart.map((obj)=>{
            console.log("")
           //return <SinglePerson key={obj.id} name={obj.title} price={obj.price} img={obj.image} describtion={obj.description} ratings={obj.rating} />
           return <SinglePerson key={obj.id} prod={obj}></SinglePerson>
          }
        )
           }
        
    </div>
  )
}

export default Cart