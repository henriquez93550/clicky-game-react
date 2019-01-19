import React, { Component } from 'react';
import "./style.css";

class FriendCard extends Component {
  constructor(props) {
    super(props);
  this.state = {
    clicked: false
  };
}

 // when you click on an image
    handleClickTrue = (event, clicked) => {
    if(clicked === true) {// game is now over
      // update the display
      this.props.changeDisplayLoser();
      // reset the score
      this.props.resetScore();
    } else { 
     // update the display
      this.props.changeDisplayCorrect();
      // update the status of "clicked" to true
      this.props.correctGuess(event);
      // shuffle the images around
      this.props.shuffle();
      // increase the score by one
      this.props.setScore();
     
    }
    }; 
    
    
    render() {
        return (
          <div className="card">
          <div className="img-container">
            <img alt={this.props.id} src={this.props.image} onClick={() => this.handleClickTrue(this.props.id, this.props.clicked)} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {this.props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {this.props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {this.props.location}
              </li>
            </ul>
          </div>
        </div>
            
            );
    }
}

export default FriendCard;