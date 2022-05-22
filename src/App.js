import Example1, {Example2} from './example';

import './App.css';
import { useEffect } from 'react';

import {Routes, Route, Link } from 'react-router-dom';

function App() {
  console.log("App called")
  useEffect(()=> console.log("APP USEEffect"))

  return (
    <div className="App">
      <h1>  React Router </h1>
    </div>
  );
}

export default App;
