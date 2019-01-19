import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    friends: friends,
    display: "Click A Tile To Start",
    clickedFriends: []
  };

  // function to show user got answer correctly
  changeDisplayCorrect = () => {
    // update the display
    this.setState({ display: "Correct!" });
  };

  // display this if they lost
  changeDisplayLost = () => {
    // update the display
    this.setState({ display: "Game Over! Try Again!" });
  };

  setScore = () => {
    // increase score by one
    this.setState({ score: this.state.score + 1 });
  };

  resetScore = () => {
    // update the topScore if the score is > topScore
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
      this.setState({ score: (this.state.score = 0) }); // then reset score to 0
      this.resetFriends();
    } else {
      // reset the score
      this.setState({ score: (this.state.score = 0) });
      // reset the clicked value of all the cards
      this.setState({ clickedFriends: [] });
      this.resetFriends();
    }
  };

  resetFriends = () => {
    const sorted = [...this.state.friends];

    for (var i = 0; i < sorted.length; i += 1) {
      delete sorted[i].clicked;
      sorted[i].clicked = false;
    }
    this.setState({ friends: sorted }, function() {});
  };

  handleShuffle = () => {
    // copy all the values from this.state.friends...
    // and puts them into this array
    const sorted = [...this.state.friends];

    // shuffle the images around
    sorted.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    this.setState({
      // replace the friends array with the sorted array
      friends: sorted
    });
  };

  correctGuess = event => {
    const sorted = { ...this.state.friends };
    for (var i = 0; i < this.state.friends.length; i += 1) {
      if (sorted[i].id === event) {
        delete sorted[i].clicked;
        sorted[i].clicked = true;
      } else {
      }
    }
    this.setState({ friends: sorted }, function() {});
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          topScore={this.state.topScore}
          display={this.state.display}
        />
        {/* for every friend in the friend card return data */}
        {this.state.friends.map(friend => (
          <FriendCard
            resetScore={this.resetScore}
            changeDisplayCorrect={this.changeDisplayCorrect}
            changeDisplayLoser={this.changeDisplayLost}
            handleClickTrue={this.handleClickTrue}
            setScore={this.setScore}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            shuffle={this.handleShuffle}
            clicked={friend.clicked}
            correctGuess={this.correctGuess}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
