import { useState } from 'react';
import PropTypes from 'prop-types'
import './Estrellas.scss';

function Estrellas({ reviews }) {
  //const [contar, setContar] = useState(0)
  const [valor, setValor] = useState(Array(5).fill(""));

  const handleClick = (index) => {
    const nuevosValores = valor.map((v, i) => (i <= index ? "Check" : ""));
    setValor(nuevosValores);
  };

  return (
    <>
      <div className='contenedor__stars'>
        <div className='contenedor__estrellas'>
          {valor.map((v, index) => (
            <div key={index} className='contenedor__estrellas--star'>
              <img
                src={`/estrella${v}.jpg`}
                onClick={() => handleClick(index)}
                className={`star${index + 1}`}
                width="16px"
              />
            </div>
          ))}
        </div>
        <div className='revisiones'>
          <h4>{reviews} review</h4>
        </div>
      </div>
    </>
  );
}
Estrellas.propTypes = {
  reviews: PropTypes.number,
}

export default Estrellas;

