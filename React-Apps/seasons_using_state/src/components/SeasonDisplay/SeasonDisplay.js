import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer: {
    text: `Let's Hit the Beach`,
    iconName: `sun`
  },
  winter: {
    text: `Brrrr. It's Chilly`,
    iconName: `snowflake`
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? `summer` : `winter`
  }
  else {
    return lat > 0 ? 'winter' : `summer`
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={` massive icon icon-left ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`massive icon icon-right ${iconName}`}></i>
    </div>
  )
}

export default SeasonDisplay



