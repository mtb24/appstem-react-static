import React from 'react'
import Header from '../header/header'

import './hero.scss'

export default props => {

    /* Outputs a hero with either an image or video background  */
    switch( props.heroType ) {

        case 'image':
            // console.log('Hero image loading...')
            return (
                <div className={`hero-wrapper ${props.className || ''}`} style={ {backgroundImage: `url(${props.backgroundImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom'}}>
                    <Header/>
                    <h1 className='title'>{ props.title || 'Default Title' }</h1>
                </div>
            )
            break
        
        case 'video': 
            console.log('Hero video loading...')
            return (
                <React.Fragment>
                <Header/>
                <h1 className='title'>{ props.title || 'Default Title' }</h1> 
                <div className={`hero-video-wrapper ${props.className || ''}`}>
                    <video
                        mute='1'
                        autoPlay='1'
                        loop='1'
                        playsInline='1'
                        poster={`assets/images/${ props.posterImg || ''}`}
                        className='hero-video'>
                        <source src={ `assets/videos/${ props.backgroundVideo || '' }` }/>
                    </video>
                </div>
                </React.Fragment>
            )
            break
        default:
            console.error('Hero component: no heroType prop was passed!')
            return null
    }


}
