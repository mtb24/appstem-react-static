import React from 'react'
import InstantImage from '../instant-image/instant-image'

import './image-box.scss'

export default props => {
    
    return !props.image ? null : (
        <div className='imagebox-wrapper'>
            <InstantImage
                className={`ib-image ${ props.className || '' }`}
                imageSrcs={ `/assets/images/main-pages/${props.image[0]}` }
                alt={ props.image[1] } />
            <div className='ib-title'>{ props.image[2] || 'Title' }</div>
            <div className='ib-desc'>{ props.image[3] || 'Description' }</div>
        </div>
    )
}
