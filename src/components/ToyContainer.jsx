import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {
  renderToyCard = () => {
    return this.props.allToys.map(toy => {
      return < ToyCard key={toy.id} toy={toy} deleteToy={this.props.deleteToy} likeAToy={this.props.likeAToy} />
    })
  }
  
  render() { 
    return ( 
      <div id="toy-collection">
        {this.renderToyCard()}
      </div>
     );
  }
}
 

export default ToyContainer;
