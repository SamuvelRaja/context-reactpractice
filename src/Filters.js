import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Ratings from './Ratings';
import { cartContext } from './context';
import { useContext } from 'react';

const Filters = () => {
   const [rate, setRate] = useState(5)
    const{dispatch}=useContext(cartContext)
    const clear=()=>{
       console.log("clearrrrrrr")
 fetch("https://fakestoreapi.com/products")
 .then((res) => res.json())
 .then((json) => {
dispatch({
  type:"ADD_PRODUCT",
  payload:json
})


  
 })
    }
  return (
    <>
    <h4 className='text-light text-center'>Filter products</h4>
     <span className='text-light'>
       <div className="form-radio">
         <input className="form-radio-input" name="sort" type="radio"  onClick={()=>{dispatch({type:"HIGH_TO_LOW", payload:""})}} id="flexCheckDefault"/>
         <label className="form-radio-label mx-2" htmlFor="flexCheckDefault">
         Highest Rated
         </label>
      </div>
      </span>
      <span className='text-light'>
      <div className="form-radio">
        <input className="form-radio-input" type="radio" name='sort' onClick={()=>{dispatch({type:"LOW_TO_HIGH", payload:""})}}  id="flexCheckChecked"/>
        <label className="form-radio-label mx-2" htmlFor="flexCheckChecked">
       Lowest Rated
       </label>
     </div>
    </span> 
    <span className='text-light'>
      <h5 className='mb-2 text-center '>price</h5>
    <div className="form-radio">
         <input className="form-radio-input" name="sort-price" type="radio"  onClick={()=>{dispatch({type:"COSTLY", payload:""})}}  id="flexRadioDefault"/>
         <label className="form-radio-label mx-2" htmlFor="flexRadioDefault">
          High to Low
         </label>
      </div>
      </span>
      <span className='text-light'>
      <div className="form-radio">
        <input className="form-radio-input" type="radio"  onClick={()=>{dispatch({type:"CHEAP", payload:""})}} name='sort-price'  id="flexRadioChecked"/>
        <label className="form-radio-label mx-2" htmlFor="flexRadioChecked">
        Low to High
       </label>
     </div>

    </span>
    <span>

    <Ratings rate={rate} 
    onClick={(i)=>{
      setRate(i+1)
      dispatch({
        type:"RATING_FILTER",
        payload:i
      })
    
    }} 
    style={{cursor:"pointer"}}/>

    </span>
    <span>
        <button className='btn btn-light' onClick={()=>{clear()}}>
            Clear Filters
        </button>
    </span>

 </>
  )
}

export default Filters