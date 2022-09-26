import React from 'react';

export default function Card(props) {
  // acá va tu código

  return (
    <div>
      {/* Card Component */}
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      
      <div>
        <h3>Min:</h3>
        <p>{props.min}</p>
      </div>

      <div>
        <h3>Max:</h3>
        <p>{props.max}</p>
      </div>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icon" />

    </div>

  )
};