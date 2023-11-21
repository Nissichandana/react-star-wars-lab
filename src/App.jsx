import React, { useState, useEffect } from 'react'
import StarshipCard from './components/StarShipCard';
import "./App.css"
import "./index.css"

const App = () => {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };
    fetchStarships();
  }, []);
  return (
    <>
   <div> < header style={{position:'fixed',top:'0',left:'0', border: '1px', padding: '5px', margin: '5px', borderRadius: '8px' ,right:'0', bottom:'5', backgroundColor:'gray',textAlign:'center'}}><h1>Star Wars Starships</h1></header></div>
    <div style={{display:'flex',flexWrap:'wrap'}}>
      
       
      {starships.map((starship, index) => (
        <div key={index} style={{ display:'flex',justifyContent:"center",alignItems:"center", border: '1px solid #ccc', margin: '70px', padding: '10px',width:"200px",boardrSizing:"boarder-box", borderRadius: '8px',backgroundColor: 'blue' }}>
          <h3>{starship.name}</h3>
        </div>
      ))}
    </div>
    </>
  );
};
export default App;