import React from 'react'
//import faker from "@faker-js/faker"
import SinglePerson from './singlePerson'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  

const [products, setProducts] = useState([])

useEffect(() => {
  //Runs only on the first render

  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
   setProducts(json)
   
  });
}, []);
  
  return (
    <div className='home-div'>
     
       <div className='person d-flex flex-row flex-wrap justify-content-around  w-100 mt-4 '>
        
        {products.map((obj)=>{
           
          // return <SinglePerson key={obj.id} name={obj.title} price={obj.price} img={obj.image} describtion={obj.description} ratings={obj.rating} />
            return <SinglePerson key={obj.id} prod={obj}></SinglePerson>
        }
        )
           }
        
       </div>
    </div>
  )
}

export default Home