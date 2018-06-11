import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import AngledSection from '../layout/page-section/angled-section'
import Testimonials from '../testimonials/testimonials'
import LinkOutlined from '../buttons/link-outlined/link-outlined'
import FeatureBlock from '../feature-block/feature-block'
import './home.scss'

export default withRouteData(({ home, caseStudiesForHomePage }) => {
  
  return (
    <React.Fragment>
      
      <Hero title={ home.title || 'Title'} 
            heroType='video' 
            backgroundVideo={ home.videoURL || '' } 
            posterImg={ home.posterImg || '' } 
            className='angle--bottom-right'/>

      
      <AngledSection className='section-1' mask='angle--both-left-right' style={{ background: 'red' }}>
        <div className='content-wrapper home-text-wrapper'> { convert(home.contents) } </div>
      </AngledSection>

      <AngledSection className='section-2' mask='angle--both-left-right'>
        <FeatureBlock 
          key={ 'case-study-1' } 
          className='case-study-1' 
          imagePosition={ 'left' } 
          caseStudy={ caseStudiesForHomePage[0] } />
      </AngledSection>
      
      <AngledSection className='section-3' mask='angle--both-left-right'>
        <FeatureBlock 
          key={ 'case-study-2' } 
          className='case-study-2' 
          imagePosition={ 'right' }
          caseStudy={ caseStudiesForHomePage[1] } />
      </AngledSection>
      
      <AngledSection className='section-4' mask='angle--both-left-right'>
        <FeatureBlock 
          key={ 'case-study-3' } 
          className='case-study-3' 
          imagePosition={ 'left' } 
          caseStudy={ caseStudiesForHomePage[2] } />
          
        <LinkOutlined linkTo="/work" className="view-portfolio-link">View Full Portfolio</LinkOutlined>
      </AngledSection>
      

      <AngledSection className='section-5' mask='angle--both-left-right'>
        <Testimonials heading='From our Clients' className='grid-wrapper testimonials-wrapper' />
      </AngledSection>

    </React.Fragment>
  )
})
