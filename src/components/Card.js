import React from "react";


function Card (props) {

console.log(props)

  return (
    <div className="card-container">
      <h4>{props.name}</h4>
    </div>
  )
}

export default Card