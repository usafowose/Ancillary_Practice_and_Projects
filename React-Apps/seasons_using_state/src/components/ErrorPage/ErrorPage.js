import React from 'react'

const ErrorPage = (props) => {
  return (
    <div className='ui active dimmer'>
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="eye slash icon"></i>
            {props.message}
        </div>
      </div>
    </div>
  )
}

ErrorPage.defaultProps = {
  message: 'Something Went Wrong'
}

export default ErrorPage