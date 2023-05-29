import React from 'react';
import { socrates_500x450 } from '../Assets';

function Tarjeta() {
  return (
    <div className='card'>
        <img src={ socrates_500x450 } alt="socrates" />
        <div className='card-body'>
            <h4 className='card-title'>Socrates</h4>
            <p className='card-text text-secondary'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Natus nulla commodi ae mollitia eligendi dicta consequuntur 
                delectus, ut quas sequi soluta pariatur.
            </p>
        </div>
    </div>
  )
}

export default Tarjeta