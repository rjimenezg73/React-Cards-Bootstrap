import React from 'react';
import Card from './Card';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';

const cards = [
  {
    id: 1,
    title: 'Google',
    image: img1,
    url: 'https://www.google.com'
  },
  {
    id: 2,
    title: 'Instagram',
    image: img2,
    url: 'https://www.instagram.com'
  },
  {
    id: 3,
    title: 'Facebook',
    image: img3,
    url: 'https://www.facebook.com'
  }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(card => (
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} imageSource={card.image} url={card.url}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards
