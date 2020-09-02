import React, { Component } from 'react';

class ToyForm extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      image: '',
      likes: 0
    }
  }

  handleInput = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  createNewToy = (event) => {
    event.preventDefault()
    let info = {
      "name": this.state.name,
      "image": this.state.image,
      "likes": this.state.likes
    }
    this.props.handleSubmit(info)
    this.setState({
      name: '',
      image: ''
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.createNewToy}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." onChange={this.handleInput} value={this.state.name} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." onChange={this.handleInput} value={this.state.image} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
