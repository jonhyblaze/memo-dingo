import React from "react";


function Card (props) {

  const [status, setStatus] = React.useState(props) 
  console.log(status)

  let prevTarget
  
function handleClick (event) {
  prevTarget = event.target.name
  
  setStatus( prev => { 
    return {
      ...prev,
      isActive: !prev.isActive
    }
  })
  if(event.target.name === prevTarget) {
    
  }
} 

  return (
    <div className="card-container" onClick={handleClick}>
      <h4>{status.isActive ? props.name : '???'}</h4>
    </div>
  )
}

export default Card