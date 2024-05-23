import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import Animal from './Animal.jsx';

export default function App() {
  return (
    <div className="App">
      <Card />
      <h1>Carga de Animal Favorito</h1>
      <Animal />
    </div>
  );
}