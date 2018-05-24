import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import AppstemLogo from '../social/icons/appstem-logo'
import Hero from '../hero/hero'
import Testimonials from '../testimonials/testimonials'
import LinkOutlined from '../buttons/link-outlined/link-outlined'
import AngledSection from '../layout/page-section/angled-section'
import FeatureBlock from '../feature-block/feature-block'
import './home.scss'

export default withRouteData(({ home, caseStudiesForHomePage }) => {
  
  return (
    <React.Fragment>
      
      <Hero title={ home.title || 'Title'} 
            heroType='video' 
            backgroundVideo={ home.videoURL || '' } 
            posterImg={ home.posterImg || '' } 
            className='angle--bottom-right'>

        <h1 className='hero-heading'>{ home.heroHeading }</h1>

      </Hero>

      <div className='home-wrapper'>

          <AngledSection className='home-text' mask='angle--bottom-right'> { convert(home.contents) } </AngledSection>

          <FeatureBlock key={ 'case-study-1' } className='angle--both-left-right case-study-1' imagePosition={ 'left' } caseStudy={ caseStudiesForHomePage[0] } />
          
          <FeatureBlock key={ 'case-study-2' } className='angle--both-left-right case-study-2' imagePosition={ 'right' } caseStudy={ caseStudiesForHomePage[1] } />
          
          <FeatureBlock key={ 'case-study-3' } className='angle--both-left-right case-study-3' imagePosition={ 'left' } caseStudy={ caseStudiesForHomePage[2] } />
          
          <LinkOutlined linkTo="/work" className="view-portfolio-link">View Full Portfolio</LinkOutlined>

      </div>

      <Testimonials heading='From our Clients' className='angle--both-left-right' />

    </React.Fragment>
  )
})
