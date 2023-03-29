import React from 'react';
import "./styles/Buttom.css"

const Button = ({handleNewQuote}) => {
  return <button className='button' onClick={handleNewQuote}>Cambiar frase</button>
};

export default Button
