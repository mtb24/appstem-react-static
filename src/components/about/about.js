import React from 'react'
import { withRouteData } from 'react-static'
import { Player, BigPlayButton, PosterImage } from 'video-react';
import Hero from '../hero/hero'
import Testimonials from '../testimonials/testimonials'
import AngledSection from '../layout/page-section/angled-section'
import ImageBox from '../image-box/image-box'
import Cta from '../layout/page-section/cta'
import LinkOutlined from '../buttons/link-outlined/link-outlined'
import './about.scss'


export default withRouteData(({ about }) => {
  
  // get images and videos from page object.
  // expects a key following: image- or video-
  const videos = []
  const images = []

  Object.entries(about).forEach(([key, val]) => {
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

      <Hero title={about.title} 
            heroType='image' 
            smallImage='/assets/images/main-pages/hdr-sm-about.jpg'
            largeImage='/assets/images/main-pages/hdr-about.jpg'
            className='angle--bottom-right' />

      <AngledSection className='about' mask='angle--both-left-right'>
        <div className='content-wrapper'>

        <Cta className='about-who-we-are' heading='Who We Are'>
          <p>Our mission is to make purpose-built apps that serve real needs in people’s lives. We use metrics-driven mobile strategies, human-centered design and efficient development to create apps that people want to use.</p>
        </Cta>

        <Player
            fluid={ true }
            preload='auto'
            poster='/assets/images/about-video-poster.png'
            src={ videos.length && `assets/videos/${videos[0]}` }>
            <BigPlayButton position="center" />
        </Player>
        
        <Cta className='about-work-as-team' heading='We work as a team'>
          <p>Whether your goal is to be featured in the App Store, build new relationships with your customers, or even to save lives, our metrics and research-driven approach enables us to deliver apps with the right outcome. Every single day we’re determined to make our apps special enough to get used.</p>
          <p>Then, we want your users to become fans. From pre-discovery research to post-launch, marketing and user acquisition, our team is driven to build a better app world. We build apps that people love.</p>
        </Cta>
        
        <Cta className='about-our-team' heading='Our Leadership Team'>
          <div className='about-team-images'>{ renderedImages }</div>
        </Cta>
        
        <AngledSection className='about-join-us-wrapper' mask='angle--both-left-right'>
          <Cta className='about-join-us' heading='Join us'>
            <p>We’ are hiring! If you can’t find what you are looking for, send us an email hello@appstem.com.</p>
            <LinkOutlined linkTo='/careers' className='view-openings-link'>View Openings</LinkOutlined>
          </Cta>
        </AngledSection>

        </div>
      </AngledSection>

      <AngledSection className='testimonials-wrapper' mask='angle--both-left-right'>
        <Testimonials className='about-testimonials' />
      </AngledSection>

    </React.Fragment>
  )
})