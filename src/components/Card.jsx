import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import 'animate.css/animate.min.css';

function Card({title, imageSource, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src={imageSource} alt="Imagen 1" className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Lorem ipsum dolor sit amet, tetur piscing elit. Nam tortor ipsum, in porta sit amet, efficitur sit amet massa. Sed tincidunt nec mauris non tincidunt. In vehicula odio at mauris bibendum malesuada. 
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
          Go to this Website...
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string
}

export default Card;
