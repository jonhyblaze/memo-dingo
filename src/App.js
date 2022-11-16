import React from 'react';
import './App.css';
import Card from './components/Card'
import { cards } from "./assets/cards"

function App() {


 
  const sortedCards = cards.sort( ()=> Math.random()-0.5)

  console.log(sortedCards)


  const renderCards = sortedCards.map ( el => {
    return (
      <Card 
        name={el.name}
        key={el.id}
      />
    )
  })
  
  
  
  
  return (
    <div className="App">
      {renderCards}
      <h4>Shuffle</h4>
    </div>


  );
}

export default App;
