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


  handleClickEvent = (clickedVal) => {
    const { clickedAlready } = this.state
    const { restart, increaseScore, content } = this.props

    if (clickedAlready) {
      alert('Clicked Already')
      restart()
    } else {
      increaseScore(content);
      this.setState({ clickedAlready: true })
    }
    console.log(this.state.score)
  }


  render() {
    const { content } = this.props

    return (
      <div
        onClick={this.handleClickEvent}
        className='four wide column'
        style={{ 'border': '1px solid grey' }}>
        <div >
          {content}
          {/* <img src={imgSrc}></img> */}
        </div>
      </div>



      // <div
      //   style={{ border: '1px solid red', marginTop: 5 }}
      //   onClick={this.handleClickEvent}>Image Would Go Here
      // </div>
    )
  }
}


export default Image;

