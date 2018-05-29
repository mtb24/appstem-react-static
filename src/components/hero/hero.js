import React from 'react'
import './hero.scss'

export default props => {

    /* Outputs a hero with either an image or video background  */
    switch( props.heroType ) {

        case 'image':
            // console.log('Hero image loading...')
            return (
                <div className={`hero-wrapper ${props.className || ''}`} style={ {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${props.backgroundImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    <h1 className='title'>{ props.title || 'Default Title' }</h1>
                </div>
            )
            break
        
        case 'video': 
            console.log('Hero video loading...')
            return (
                <React.Fragment>
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
                <h1 className='title'>{ props.title || 'Default Title' }</h1>
                </React.Fragment>
            )
            break
        default:
            console.error('Hero component: no heroType prop was passed!')
            return null
    }


}
