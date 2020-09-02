import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toyInfo, index) =>{
        return <ToyCard key={index} toy={toyInfo} handleLiked={props.handleLiked} handleDelete={props.handleDelete}/>
      })}
    </div>
  );
}

export default ToyContainer;
