import React from 'react'
// import { card_data } from '../Constant';
import { Card, Modal } from "./index.js";
import '../styles/ListCard.css'
import { useState } from "react";




const ListCard = ({ targets }) => {

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalmodalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");


  const showModalContent = (id, content)=>{
    setModalShow(true)
    setModalmodalTitle(id)
    setModalContent(content)
  }

  return (
    <div className='row container__listcard'>
        {targets.map((card)=>(
          <div className='col-md-3 continer__listcard-child' key={card.id}> 
            <Card images={ card.img } title={card.title} showModalContent={()=> showModalContent(card.title, card.content)}/>
          </div>
        ))}

        <Modal
          title={modalTitle}
          content={modalContent}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />    
    </div>

    
  )
}

export default ListCard