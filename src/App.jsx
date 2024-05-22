import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './Card.jsx';

export default function App() {
  return (
    <div className="App">
      <Card />
      <h1>Carga de estudiantes</h1>
    </div>
  );
}