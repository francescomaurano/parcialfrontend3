// src/Card.jsx
import React from 'react';

function Card({name, animal}) {
  return (
    <div className="card">
      <h2>Persona</h2>
      <p>Nombre: {name}</p>
      <p>Animal Favorito: {animal}</p>
    </div>
  );
}

export default Card;
