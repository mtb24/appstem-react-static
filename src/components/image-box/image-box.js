import React from 'react'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'
import './image-box.scss'

export default props => {
    
    return !props.image ? null : (
        <div className='imagebox-wrapper'>
            <Img
                className={`ib-image ${ props.className || '' }`}
                src={ `assets/images/main-pages/small/${props.image[0]}` }
                alt={ props.image[1] }
                loader={ <BeatLoader color={'#3cd52e'} loading={ true } /> } />
            <div className='ib-title'>{ props.image[2] || 'Title' }</div>
            <div className='ib-desc'>{ props.image[3] || 'Description' }</div>
        </div>
    )
}
