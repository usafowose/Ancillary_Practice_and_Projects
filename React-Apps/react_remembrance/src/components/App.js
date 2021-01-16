import React from 'react';
import Header from './Header'
import Image from './ImageList'


// LOGIC 
// 1. Keep Tabs of Score
// 2. Restart Game Condition
class App extends React.Component {
  state = { score: 0, };


  handleScoreIncrement = (e) => {
    this.setState({ score: this.state.score + 1 })
    console.log(this.state.score)
  }

  render() {

    return (
      <div>
        <Header score={this.state.score} />
        <Image increaseScore={this.handleScoreIncrement} />
        <Image increaseScore={this.handleScoreIncrement} />
        <Image increaseScore={this.handleScoreIncrement} />

      </div>
    )

  }
};


export default App; 