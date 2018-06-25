import React from 'react'
import InstantImage from '../instant-image/instant-image'

export default (props) => {

    let slug = ''
    if (props.imagePath && typeof props.imagePath === 'String')
    {
        slug = props.imagePath.slice(0, -1)
        slug = slug.slice(slug.lastIndexOf('/'))
        slug = slug.slice(1)
    }
    else {
        slug = 'an image showing application screens'
    }

    return props.wireframeImages.length && props.wireframeImages.length > 0
    ?   <div className='wireframes'>
            {
                props.wireframeImages.map( (image, i) => (
                    <InstantImage
                        key={i}
                        className='wireframe-image'
                        imageSrcs={ props.imagePath + image || '' }
                        alt={ props.alt || slug } />
                ))
            }
        </div>
    : null
}