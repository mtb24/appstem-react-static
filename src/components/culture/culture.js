import React from 'react'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import Testimonials from '../testimonials/testimonials'
import AngledSection from '../layout/page-section/angled-section'
import backgroundImage from '../../../public/assets/images/main-pages/bg_culture.jpg'
import ImageBox from '../image-box/image-box'
import { Player, BigPlayButton, PosterImage } from 'video-react';
import posterImage from '../../../public/assets/images/culture-video-poster.png'
import Cta from '../layout/page-section/cta'
import LinkOutlined from '../buttons/link-outlined/link-outlined'
import './culture.scss'


export default withRouteData(({ culture }) => {
  
  // get images and videos from page object.
  // expects a key following: image- or video-
  const videos = []
  const images = []

  Object.entries(culture).forEach(([key, val]) => {
    if( /^image-/.test(key) ) {
      images.push(val)
    } 
    if( /^video-/.test(key) ) {
      videos.push(val)
    }
  });

  const renderedImages = images.length && images.map(
    (image, index) => (<ImageBox key={ index } image={ image } />)
  )

  return (
    <React.Fragment>

      <Hero title={culture.title} 
            heroType='image' 
            backgroundImage={ backgroundImage } 
            className='angle--bottom-right' />

      <AngledSection className='culture' mask='angle--both-left-right'>
        <div className='content-wrapper'>

        <Cta className='culture-who-we-are' heading='Who We Are'>
          <p>Our mission is to make purpose-built apps that serve real needs in people’s lives. We use metrics-driven mobile strategies, human-centered design and efficient development to create apps that people want to use.</p>
        </Cta>

        <Player
            fluid={ true }
            preload='auto'
            poster={ posterImage }
            src={ videos.length && `assets/videos/${videos[0]}` }>
            <BigPlayButton position="center" />
        </Player>
        
        <Cta className='culture-work-as-team' heading='We work as a team'>
          <p>Whether your goal is to be featured in the App Store, build new relationships with your customers, or even to save lives, our metrics and research-driven approach enables us to deliver apps with the right outcome. Every single day we’re determined to make our apps special enough to get used.</p>
          <p>Then, we want your users to become fans. From pre-discovery research to post-launch, marketing and user acquisition, our team is driven to build a better app world. We build apps that people love.</p>
        </Cta>
        
        <Cta className='culture-our-team' heading='Our Leadership Team'>
          <div className='culture-team-images'>{ renderedImages }</div>
        </Cta>
        
        <Cta className='culture-join-us' heading='Join us'>
          <p>We’ are hiring! If you can’t find what you are looking for, send us an email hello@appstem.com.</p>
          <LinkOutlined linkTo='/careers' className='view-openings-link'>View Openings</LinkOutlined>
        </Cta>

        </div>
      </AngledSection>

      <AngledSection className='testimonials-wrapper' mask='angle--both-left-right'>
        <Testimonials className='culture-testimonials' />
      </AngledSection>

    </React.Fragment>
  )
})