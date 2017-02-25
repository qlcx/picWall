import React, { Component } from 'react'

import './PicContainer.css'

class PicContainer extends Component {
  render() {
    const { picUrl } = this.props

    return(
      <div>
        <img className='picContainer_img' alt='img' src={picUrl} />
      </div>
    )
  }
}

export default PicContainer