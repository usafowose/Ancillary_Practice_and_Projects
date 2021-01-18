import React from 'react';
import Header from './Header'
import Image from './ImageList'

// LOGIC 
// 1. Keep Tabs of Score
// 2. Restart Game Condition

// TO-DO : Conditionally restart the game
class App extends React.Component {
  state = { score: 0 };
  array = [1, 2, 3]

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
        {this.array.map((cv, i, arr) => {
          return (
            <div key={cv}>
              <Image
                score={this.state.score}
                increaseScore={this.handleScoreIncrement}
                restart={this.handleRestart}
              />
            </div>
          )
        })
        }

      </div>
    )

  }
};


export default App; 