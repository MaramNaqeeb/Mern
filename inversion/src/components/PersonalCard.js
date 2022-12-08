import React from 'react'

const PersonalCard = (props) => {
  return (
    <div>
      
      <h2> { props.firstName } { props.lastName }</h2>
                <p> Age: {props.age}</p>
                <p> Hair Color: {props.color}</p>
    </div>
  )
}

export default PersonalCard
