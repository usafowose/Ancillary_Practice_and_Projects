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
    clickedValues: []
  };

  images = ImageArray

  handleScoreIncrement = (clickedVal) => {
    const { clickedValues } = this.state;

    if (clickedValues.indexOf(clickedVal) === -1) {
      this.setState({
        score: this.state.score + 1,
        clickedValues: [...this.state.clickedValues, clickedVal]
      })
    } else {
      alert('Clicked Already')
      this.handleRestart()
    }
    // console.log(this.state)
    console.log(clickedVal)
  }

  handleRestart = () => {
    this.setState({ score: 0, clickedValues: [] })
  }

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  render() {
    this.shuffle(this.images)
    console.log(this.state)
    console.log(this.images)
    return (

      <div>
        <Header score={this.state.score} />
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