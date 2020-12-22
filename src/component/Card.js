import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Currently Available Samples</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/r3.jpg'
              
              
              path='/services'
            />
            <CardItem
              src='images/n1.jpg'
             
              
              path='/services'
            />
          </ul>
          </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/e10.jpg'
             
              
              path='/services'
            />
            <CardItem
              src='images/n2.jpg'
              
              
              path='/products'
            />
            
          </ul>
        </div>
       </div>
    </div>
  );
}

export default Cards;
