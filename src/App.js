import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

//import data from './data'


class App extends React.Component{

  state = {
    display: false,
    allToys: [],
    name: '',
    image: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => this.setState({
      allToys: toys
    }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        likes: 0
      })
    })
      .then(resp => resp.json())
      .then(toyData => {
        this.setState({
          allToys: [...this.state.allToys, toyData]
        })
      })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleImage = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  deleteToy = (id) => {
    const newToyArr = this.state.allToys.filter((toyObj)=> {
      return toyObj.id !== id
      })
      this.setState({
        allToys: newToyArr
      })
        fetch('http://localhost:3000/toys/'+ id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
  }

  likeAToy = (toy) => {
    const updatedLikes = this.state.allToys.map(toyObj => {
      if(toyObj.id === toy.id){
        return {
          ...toyObj,
          likes: toyObj.likes + 1
        }
      } else{
        return toyObj
      }
    })
    this.setState({ 
      allToys: updatedLikes
    })
  }

  render(){
    return (
      <div>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleSubmit={this.handleSubmit} handleImage={this.handleImage} handleName={this.handleName} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer allToys={this.state.allToys} deleteToy={this.deleteToy} likeAToy={this.likeAToy} />
      </div>
    );
  }

}

export default App;
