import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  console.log(props)
  return(
    <div id="toy-collection">
      {props.toys.map(toyObj => {
        return <ToyCard toy={toyObj} destroyToy={props.destroyToy} updateLikes={props.updateLikes}/>
      })}
    </div>
  );
}

export default ToyContainer;
