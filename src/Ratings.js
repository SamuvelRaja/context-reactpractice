import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillStarFill, BsStar} from "react-icons/bs"
const Ratings = ({rate, onClick, style}) => {
  return (
    
    <span  className='inner-star mb-2' >
    {[...Array(5)].map((o,i)=>{ return <span key={i} onClick={()=>onClick(i+1)} style={style} >{i+1<rate?<BsFillStarFill />:<BsStar />}</span>})}
  </span>
  )
}

export default Ratings