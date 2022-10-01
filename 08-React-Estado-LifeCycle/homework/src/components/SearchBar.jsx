import React, {useState} from 'react';
import {input, agregar} from "./SearchBar.module.css" ;

export default function SearchBar({onSearch}) {

    const [city, setCity] = useState("");

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input className={input}
            type="text"
            onChange={(e)=> setCity(e.target.value)}
            placeholder="Ciudad..."
        />
        <input className={agregar}  type="submit" value="Agregar" />
      </form>
    );
  }

