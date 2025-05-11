import React from 'react'
import "../assets/css/Card.css";

export default function Card(props) {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button>Learn More</button>
    </div>
  )
}
