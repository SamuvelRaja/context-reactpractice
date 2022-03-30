import React from 'react'
//import faker from "@faker-js/faker"
import SingleProduct from './singleProduct'
import { useContext } from 'react'
import { cartContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filters';


const Home = () => {
  

// const [products, setProducts] = useState([])

// useEffect(() => {
//   //Runs only on the first render

//   fetch("https://ffakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => {
//    setProducts(json)
   
//   });
// }, []);
const{state }=useContext(cartContext)
console.log(state.products)
  
  return (
    <div className='home-div d-flex flex-row'>
      <div className='filters d-flex flex-column px-2 m-2 bg-secondary'>
        <Filters/>
      </div>
      <div className='person d-flex flex-row flex-wrap justify-content-around  w-75 mt-4 '>
        
        {state.products.map((obj)=>{
           
      
            return <SingleProduct key={obj.id} prod={obj}/>
        }
        )
           }
        
       </div>
    </div>
  )
}

export default Home