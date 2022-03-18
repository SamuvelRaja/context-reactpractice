import React, { useContext } from 'react'
import { cartContext } from './context'
import SinglePerson from './singlePerson'

const Cart = () => {
  const {cart, setCart}=useContext(cartContext)
  return (
    <div className='cart'>
         {cart.map((obj)=>{
            console.log("")
           return <SinglePerson key={obj.index} name={obj.firstName} img={obj.image} contact={obj.contactNo} id={obj.personId} />
          }
        )
           }
        
    </div>
  )
}

export default Cart