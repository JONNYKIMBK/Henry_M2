import React from 'react';
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className={`${style.div}`}>
    <input className={`${style.input}`} type="text" placeholder='Ciudad...' />
    <button className={`${style.agregar}`} onClick={()=> {onSearch("Valor del input")}}>Agregar</button>
  </div>
};