import React from 'react'
import './hero.scss'
import CasestudyHero from './case-study-hero/case-study-hero'
import ImageHero from './image-hero/image-hero'
import VideoHero from './video-hero/video-hero'

export default props => {

    /* Outputs a hero with either an image, video, or case-study layout  */
    switch( props.heroType ) {

        case 'image':
            console.log('image hero loading...')
            return <ImageHero {...props}/>
            break
        
        case 'video': 
            console.log('video hero loading...')
            return <VideoHero {...props}/>
            break

        case 'case-study':
            console.log('case-study hero loading...')
            return <CasestudyHero {...props}/>
            break
        default:
            console.error('Hero component: no heroType prop was passed!', props)
            return null
    }


}
