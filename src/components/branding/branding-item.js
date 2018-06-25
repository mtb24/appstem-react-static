import React from 'react'
import InstantImage from '../instant-image/instant-image'

export default (props) => {
    // console.log(props)
    const pathToImages = `/assets/images/case-studies/${ props.slug }/`
    return (
        <div className='branding-images'>
        { props.images.map( (image, i) => <InstantImage key={i} className='branding-image' imageSrcs={ pathToImages + image || '' } alt={ `an image for ${ props.slug }` } /> )}
        </div>
    )
}