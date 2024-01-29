import { Component } from 'react'
import bgWrapper from './bgwrapper.png'

class ImageComponent extends Component {
  
  render() {

const imgUrl = this.props.src
const imgAlt = this.props.alt 

    return (
    <div className='wrapperImg' >
      <img className='outerImg' src={bgWrapper} alt={"ms paint interface"}/>
      <img className='innerImg' src={imgUrl} alt={imgAlt}/>

    </div>
    )
  }
}

export default ImageComponent
