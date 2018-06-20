import React from 'react'
import './video-hero.scss'

export default (props) => (
    <React.Fragment>
    <div className={`hero video-hero ${props.className || ''}`}>
        <span className='video-title'>{ props.title || 'Default Title' }</span>
        <video
            mute='1'
            autoPlay='1'
            loop='1'
            playsInline='1'
            poster={`/assets/images/${ props.posterImg || ''}`}>
            <source src={ `/assets/videos/${ props.backgroundVideo || '' }` }/>
        </video>
    </div>
    </React.Fragment>
)
