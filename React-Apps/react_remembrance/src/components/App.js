import React from 'react';
import Header from './Header'
import Image from './ImageList'
import ImageArray from './ImageArray';

// LOGIC 
// 1. Keep Tabs of Score
// 2. Restart Game Condition

// TO-DO : Score Based on Image/Letter CLicked Not Div
class App extends React.Component {

  state = {
    score: 0,
    clickedValues: [],
    highScore: 0
  };

  images = ImageArray

  componentDidMount() {
    window.sessionStorage.setItem('highScore', this.state.score)
    this.setState({ highScore: parseInt(window.sessionStorage.getItem('highScore')) })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (window.sessionStorage.getItem('highScore') < this.state.score) {
      window.sessionStorage.setItem('highScore', this.state.score)
    } else {
      return
    }
  }
  handleScoreIncrement = (clickedVal) => {
    const { clickedValues } = this.state;
    const highScore = window.sessionStorage.getItem('highScore')

    if (clickedValues.indexOf(clickedVal) === -1) {
      this.setState({
        score: this.state.score + 1,
        clickedValues: [...this.state.clickedValues, clickedVal],
        highScore: highScore
      })
    } else {
      alert('Clicked Already')
      this.handleRestart()
    }

  }

  handleRestart = () => {
    this.setState({ score: 0, clickedValues: [], highScore: parseInt(window.sessionStorage.getItem('highScore')) })
  }

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  render() {
    this.shuffle(this.images)

    return (

      <div>
        <Header
          score={this.state.score}
          highScore={this.state.highScore} />
        <div className='ui container'>
          <div className='ui segment'>
            <div className='ui four column grid'>

              {[...this.images].map((image, i, arr) => {
                return (
                  <Image
                    key={i}
                    content={image}
                    score={this.state.score}
                    increaseScore={this.handleScoreIncrement}

                  />

                )
              })
              }
            </div>
          </div>
        </div>

      </div>
    )

  }
};


export default App; 