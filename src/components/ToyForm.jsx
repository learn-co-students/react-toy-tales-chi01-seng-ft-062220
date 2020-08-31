import React, { Component } from 'react';

class ToyForm extends Component {
  // constructor(){
  //   super()
  //   this.state = {
      
  //     newToy: []
  //   }
  // }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.props.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.props.handleName} value={this.props.name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.props.handleImage} value={this.props.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
