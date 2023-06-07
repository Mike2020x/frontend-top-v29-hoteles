import { useEffect, useState } from 'react';
import './Star.scss';

export default function Star() {
  //const [contar, setContar] = useState(0)
  const [valor, setValor] = useState(Array(5).fill(""));


  const handleClick = (index) => {
    const nuevosValores = valor.map((v, i) => (i <= index ? "Check" : ""));
    setValor(nuevosValores);
  };

  return (
    <>
      <div className='content__star'>
        <div className='content__star--only'>
          {valor.map((v, index) => (
            <div key={index} className='content__star--style'>
              <img
                src={`/star${v}.jpg`}
                onClick={() => handleClick(index)}
                className={`star${index + 1}`}
                width="16px"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

