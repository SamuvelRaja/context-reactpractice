import React, { useContext } from 'react'
import { cartContext } from './context'




const SinglePerson = ({name, img, contact, id}) => {
  const{cart, setCart}=useContext(cartContext)
const handler=()=>{
   setCart([...cart, {firstName:name, image:img, contactNo:contact, personId:id}])
}
 console.log(cart)
  return (
    <div className='single-person'>
        <h2>Applicant</h2>
       <img src={img} alt={name}></img>
         <h4>{name}</h4>
         <h4>number - {contact}</h4>
         {
         <button onClick={()=>{handler()}} className="btn">ADD</button>
         }
    </div>
  )
}

export default SinglePerson