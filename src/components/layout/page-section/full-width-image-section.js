import React from 'react'
import InstantImage from '../../instant-image/instant-image'

const defaultProps = {
    imagePath: '/fav_appstem_144x144.png',
    className: 'full-width-image-section',
    mask: 'angle--both-left-right',
}

export default props => {

    const mask = props.mask || defaultProps.mask
    
    const defaultStyle = {
        width: '100vw',
        textAlign: 'center',
    }
    
    return (
        <div className={ `${ defaultProps.className } ${ mask } ${ props.className || '' }` } style={ defaultStyle }>
            <InstantImage
                imageSrcs={ props.imagePath }
                alt={ props.imageAlt || 'a full width image' }
                style={{
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    width: '100%',
                }}/>
        </div>
    )
}
