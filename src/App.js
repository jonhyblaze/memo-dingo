import React from 'react';
import './App.css';
import Card from './components/Card'
import { cards } from "./assets/cards"

function App() {

  const [animals, setAnimals] = React.useState([...cards].sort(()=> Math.random() -0.5))
 

  
  
  const animalsMap = animals.map ( el => {
    return (  
      <Card 
        name={el.name}
        key={el.id}
        isActive={el.isActive}
      />
    )
  })
  
  
  return (
    <div className="App">
      {animalsMap}
      <h4>Shuffle</h4>
    </div>


  );
}



export default App;
