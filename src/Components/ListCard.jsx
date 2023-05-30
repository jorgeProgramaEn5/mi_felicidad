import React from 'react'
// import { card_data } from '../Constant';
import { Card } from "./index.js";
import '../styles/ListCard.css'



const ListCard = ({ targets }) => {
  return (
    <div className='row container__listcard'>
        {targets.map((card)=>(
          <div className='col-md-3 continer__listcard-child' key={card.id}> 
            <Card images={ card.img } title={card.title}/>
          </div>
        ))}
    </div>
  )
}

export default ListCard