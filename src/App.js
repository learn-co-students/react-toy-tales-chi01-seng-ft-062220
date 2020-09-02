import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{
  constructor(){
      super()
      this.state = {
        display: false,
        allToys: []
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/toys`)
      .then(response => response.json())
        .then(toyData => {
            this.setState({
              allToys: toyData
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleLike = (num, id) =>{
    console.log(num, id)
    const reqObj={
      method: 'PATCH', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({likes: num})
    }
    fetch(`http://localhost:3000/toys/${id}`, reqObj)
      .then(resp => resp.json())
        .then(updatedToy => {
          let allToys = this.state.allToys
          let originalToy = allToys.find(toy => toy.id === updatedToy.id)
          allToys.splice(allToys.indexOf(originalToy), 1, updatedToy)
          this.setState({
            allToys: allToys
          })
        })
  }

  handleDelete = (id) =>{
    // console.log('gotta delete me')
    const reqObj={
      method: 'DELETE'
    }
    fetch(`http://localhost:3000/toys/${id}`, reqObj)
      .then(resp => resp.json())
        .then(updatedToy => {
          let allToys = this.state.allToys
          let originalToy = allToys.find(toy => toy.id === id)
          allToys.splice(allToys.indexOf(originalToy), 1)
          this.setState({
            allToys: allToys
          })
        })
  }

  handleSubmit = (info) =>{
    const reqObj = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(info)
    }

    fetch(`http://localhost:3000/toys`, reqObj)
      .then(response => response.json())
        .then(newToy => {
          this.setState({
            allToys: [...this.state.allToys, newToy]
          })
        })
  }

  render(){
    return (
      <>
        <Header/>
        {this.state.display? <ToyForm handleSubmit={this.handleSubmit}/> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer handleDelete={this.handleDelete} handleLiked={this.handleLike} toys={this.state.allToys}/>
      </>
    );
  }

}

export default App;
