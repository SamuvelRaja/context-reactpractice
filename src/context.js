import React, { createContext } from 'react'

import { useEffect } from 'react';
import { useReducer } from 'react';

const reducer = (state, action)=>{
    switch(action.type){

      case "ADD_PRODUCT":
        return{products:[...action.payload] , cart:[...state.cart ]}
    

      case "ADD_TO_CART":
        return{...state, cart:[...state.cart, action.payload]}

        case "REMOVE_FROM_CART":
          return{...state, cart:[...action.payload]}

        case "LOW_TO_HIGH":
          return{products:state.products.sort(function(a,b){return a.rating.rate-b.rating.rate}), cart:[...state.cart]}  
      
        case "HIGH_TO_LOW":
          return{products:state.products.sort(function(a,b){return b.rating.rate-a.rating.rate}), cart:[...state.cart]}  
        
        case "COSTLY":
          return{products:state.products.sort(function(a,b){return b.price-a.price}), cart:[...state.cart]} 
              
        case "CHEAP":
           return{products:state.products.sort(function(a,b){return a.price-b.price}), cart:[...state.cart]}      
          
       case "RATING_FILTER":
            return{products:[...state.products.filter((obj)=>{return Math.round(obj.rating.rate)===action.payload}), ...state.products.filter((obj)=>{return Math.round(obj.rating.rate)!==action.payload})], cart:[...state.cart]}    
           
         
     default:
       return{
       ...state, cart:[action.payload]
     }
    }
}
export const cartContext=createContext();
const Context = ({children}) => {
 

let productArr=[];

useEffect(() => {
  


 fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
 dispatch({
   type:"ADD_PRODUCT",
   payload:json
 })

 
   
  })
}, [])


    const[state, dispatch]=useReducer(reducer ,{products:productArr, cart:[ ]})
 
    console.log(state.products)
   // const [cart, setCart] = useState([])
  return (
    <cartContext.Provider value={ {state, dispatch }}>
        {children}
    </cartContext.Provider>
  )
}

export default Context