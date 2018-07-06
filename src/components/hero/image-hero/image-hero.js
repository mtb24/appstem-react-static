import React from 'react'
import MediaQuery from 'react-responsive'
import './image-hero.scss'

export default (props) => (
    <React.Fragment>
    <MediaQuery maxWidth={767}>
        <div 
            className={`hero image-hero ${props.className || ''}`} 
            style={{
                background: 'url('+`${props.smallImage}`+')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                backgroundPosition: 'center center'}}>
            <h1 className='title'>{ props.title || 'Default Title' }</h1>
        </div>
    </MediaQuery>

    <MediaQuery minWidth={768}>
        <div 
            className={`hero image-hero ${props.className || ''}`} 
            style={{
                background: 'url('+`${props.largeImage}`+')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                backgroundPosition: 'center center'}}>
            <h1 className='title'>{ props.title || 'Default Title' }</h1>
        </div>
    </MediaQuery>
    </React.Fragment>
)
