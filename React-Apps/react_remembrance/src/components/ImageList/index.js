import React from 'react';


class Image extends React.Component {

  state = {
    clickedAlready: false
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.score !== this.props.score && this.props.score === 0) {
      this.setState({ clickedAlready: false })
    }
  }


  handleClickEvent = (e) => {
    const { clickedAlready } = this.state
    const { restart, increaseScore } = this.props

    if (clickedAlready) {
      alert('Clicked Already')
      restart()
    } else {
      increaseScore();
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

