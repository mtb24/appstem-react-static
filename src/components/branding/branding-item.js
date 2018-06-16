import React from 'react'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'

export default (props) => {
    console.log(props)
    const pathToImages = `/assets/images/case-studies/${ props.slug }/`
    return props.images.map( (image, i) => <Img key={i} className='branding-image' src={ pathToImages + image || '' } alt={ `an image for ${ props.slug }` } loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } /> )
}