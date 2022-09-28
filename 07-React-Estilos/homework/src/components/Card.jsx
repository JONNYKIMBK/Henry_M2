import React from 'react';
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código

  return (
    <div className={`${style.cuadro}`}>
      {/* Card Component */}
      <button className={`${style.boton}`} onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      
      <div className={`${style.columnas}`}>
        <h3>Min</h3>
        <p>{props.min}</p>
      </div>

      <div className={`${style.columnas}`}>
        <h3>Max</h3>
        <p>{props.max}</p>
      </div>

      <div className={`${style.columnas}`} >
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icon"  />

      </div>

    </div>

  )
};