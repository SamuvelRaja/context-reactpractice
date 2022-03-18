import React from 'react'
import faker from "@faker-js/faker"
import SinglePerson from './singlePerson'
const Home = () => {
  
  var rows = [];
for (var i = 0; i < 21; i++) {

    rows.push({
      index:i,
       firstName:faker.name.firstName(),
      image:faker.image.avatar(),
      contactNo:faker.phone.phoneNumber(),
      personId:faker.datatype.uuid()

    });
}

  return (
    <div >
     
       <div className='person'>
        
        {rows.map((obj)=>{
            console.log("")
           return <SinglePerson key={obj.index} name={obj.firstName} img={obj.image} contact={obj.contactNo} id={obj.personId} />
          }
        )
           }
        
       </div>
    </div>
  )
}

export default Home