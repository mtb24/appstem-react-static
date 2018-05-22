import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import AppstemLogo from '../social/icons/appstem-logo'
import Hero from '../hero/hero'
import Testimonials from '../testimonials/testimonials'
import LinkOutlined from '../buttons/link-outlined/link-outlined'
import AngledSection from '../layout/page-section/angled-section'
import './home.scss'

export default withRouteData(({ home }) => {
  console.log('home props: ', home)

  return (
    <React.Fragment>
      
      <Hero title={ home.title || 'Title'} 
            heroType='video' 
            backgroundVideo={ home.videoURL || '' } 
            posterImg={ home.posterImg || '' } 
            className='angle--bottom-right'>

        <h1 className='hero-heading'>{ home.heroHeading }</h1>

      </Hero>

      <div className='home-wrapper angle--bottom-right'>
      
          <AngledSection className='home-text' mask='angle--bottom-right'> { convert(home.contents) } </AngledSection>

          <AngledSection className='case-study-1' mask='angle--bottom-right'>  </AngledSection>
          <AngledSection className='case-study-2' mask='angle--bottom-right'>  </AngledSection>
          <AngledSection className='case-study-3' mask='angle--bottom-right'>
            <LinkOutlined linkTo="/work" className="view-portfolio-link">View Full Portfolio</LinkOutlined>
          </AngledSection>

      </div>

      <Testimonials heading='From our Clients' className='angle--both-left-right' />

    </React.Fragment>
  )
})
