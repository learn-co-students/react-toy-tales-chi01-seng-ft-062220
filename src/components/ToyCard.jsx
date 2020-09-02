import React, { Component } from 'react';

class ToyCard extends Component {

  updateLikes = () =>{
    let toyID = this.props.toy.id
    let newLike = this.props.toy.likes += 1
    this.props.handleLiked(newLike, toyID)
  }

  donateMe = () =>{
    let toyID = this.props.toy.id
    this.props.handleDelete(toyID)
  }

  render() {
    const { name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.updateLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateMe}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
