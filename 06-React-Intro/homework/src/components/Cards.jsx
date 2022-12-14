import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
    {props.cities.map(city => (
      <Card 
        min={city.main.temp_min} 
        max={city.main.temp_max} 
        name={city.name} 
        img={city.weather[0].icon} 
        onClose={() => alert(city.name)}
        key={city.id}
      />
    ))}
  </div>
};