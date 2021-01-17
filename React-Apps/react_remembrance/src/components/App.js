import React from 'react';
import Header from './Header'
import Image from './ImageList'


// LOGIC 
// 1. Keep Tabs of Score
// 2. Restart Game Condition

// TO-DO : Conditionally restart the game
class App extends React.Component {
  state = { score: 0, };


  handleScoreIncrement = (e) => {
    this.setState({ score: this.state.score + 1 })
    console.log(this.state.score)
  }

  handleRestart = () => {
    this.setState({ score: 0 })
  }


  render() {

    return (
      <div>
        <Header
          score={this.state.score} />
        <Image
          restart={this.handleRestart}
          increaseScore={this.handleScoreIncrement}
        />
        <Image
          restart={this.handleRestart}
          increaseScore={this.handleScoreIncrement}
        />
        <Image
          restart={this.handleRestart}
          increaseScore={this.handleScoreIncrement}
        />

      </div>
    )

  }
};


export default App; 