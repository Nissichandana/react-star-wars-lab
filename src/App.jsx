import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarShipCard from './components/StarShipCard.jsx'
//import Nav from './components/Nav'

function App() {
  // State to hold the ship data
  const [ship, setShip] = useState([]);

  // function to fetch ship data
  const shipData = async () => {
    try {
      const response = await fetch ("https://swapi.dev/api/starships/");
      const data = await response.json();
      setShip(data.results);
    }catch (e){
      console.error(e);
    }
  };

  const shipList = ship.map((selection) => {selection.name})

  // useEffect to run shipdata 

  useEffect(() => {
    shipData();
  }, []);

  return (
    
    <div>
      {shipList}
    </div>
  )
}

export default App
