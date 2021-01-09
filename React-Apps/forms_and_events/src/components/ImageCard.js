import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
  
  }

  handleSetImageSpans = e => {
    const image = this.imageRef.current
    const height = image.clientHeight

    const spans = Math.ceil(height / 10)
    console.log(spans)

    this.setState({ spans })

  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          
          onLoad={this.handleSetImageSpans}
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          
        />
      </div>
    )
  }

}

export default ImageCard;