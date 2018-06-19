import React from 'react'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'

const defaultProps = {
    imagePath: '/fav_appstem_144x144.png',
    className: 'full-width-image-section',
    mask: 'angle--both-left-right',
}

export default props => {

    const mask = props.mask || defaultProps.mask;
    
    const defaultStyle = {
        width: '100vw',
        textAlign: 'center',
    }
    
    return (
        <div className={ `${ defaultProps.className } ${ mask } ${ props.className || '' }` } style={ defaultStyle }>
            <Img
                src={ props.imagePath }
                alt={ props.imageAlt || 'a full width image' }
                loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } 
                style={{
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    width: '100%',
                }}/>
        </div>
    )
}
