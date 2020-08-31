import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    const { id } = this.props.toy
    fetch('http://localhost:3001/toys/' + id, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.destroyToy(id)
    })
  }

  handleLike = () => {
    const { id, likes } = this.props.toy
    const reqObj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({likes: likes + 1})
    }

    fetch('http://localhost:3001/toys/' + id, reqObj)
    .then(resp => resp.json())
    .then(toy => {
      this.props.updateLikes(id)
    })
  }

  render() {
    const { name, image, id, likes } = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
