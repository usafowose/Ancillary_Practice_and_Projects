import React from 'react';


class Image extends React.Component {

  state = {
    clickedAlready: false,
    score: this.props.score
  }


  handleRestart = () => {
    this.props.restart();
    if (this.props.score === 0) {
      this.setState({ clickedAlready: false })
    }
  }


  handleClickEvent = (e) => {
    if (this.state.clickedAlready) {
      alert('Clicked Already')
      this.handleRestart()
      this.setState({ clickedAlready: false })
    } else {
      this.props.increaseScore();
      this.setState({ clickedAlready: true })
    }
    console.log(this.state.score)
  }


  render() {
    return (
      <div
        style={{ border: '1px solid red', marginTop: 5 }}
        onClick={this.handleClickEvent}>Image Would Go Here
      </div>
    )
  }
}


export default Image;

