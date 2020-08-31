import React, { Component } from 'react';

class ToyCard extends Component {

  donateClick = () => {
    this.props.deleteToy(this.props.toy.id)
  }

  likeClick = () => {
    fetch('http://localhost:3000/toys/' + this.props.toy.id , {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        likes: this.props.toy.id + 1
       })
    })
      .then(resp => resp.json())
      .then(toyData => {
        this.props.likeAToy(this.props.toy)
      })


  }

  render() {
    const { name, image, likes } = this.props.toy
    return (
      <div className="card">
        <h2>{ name }</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.likeClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateClick}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
