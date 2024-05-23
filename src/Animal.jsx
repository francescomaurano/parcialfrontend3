import React, { useState } from 'react';
import Card from './Card';

function Animal() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (name.length < 3 || name.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta.');
      setShowCard(false);
      return;
    }

    if (animal.length < 6) {
      setError('Por favor chequea que la información sea correcta.');
      setShowCard(false);
      return;
    }

    setError('');
    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Utiliza setName para actualizar el estado del nombre
            />
          </label>
        </div>
        <div>
          <label>
            Animal Favorito:
            <input
              type="text"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard && <Card name={name} animal={animal} />}
    </div>
  );
}

export default Animal;
