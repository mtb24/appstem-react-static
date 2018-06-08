import React from 'react'
import { withRouteData, Link } from 'react-static'
import Hero from '../hero/hero'
import backgroundImage from '../../../public/assets/images/main-pages/large/bg_portfolio.png'
import './work.scss'
import FeatureBlock from '../feature-block/feature-block';
import AngledSection from '../layout/page-section/angled-section'

export default withRouteData(({ work }) => {
  
  return (

  <React.Fragment>

    <Hero title='Our Work' 
          heroType='image' 
          backgroundImage={ backgroundImage }
          className='angle--bottom-right' />

    <div className='work content-wrapper'>

      {
        work.map( (caseStudy, i) => {

          const imagePosition = ( i % 2 == 0 )? 'left' : 'right'
          const backgroundColor = ( i % 2 == 0 )? 'bg-regular' : 'bg-alternate'

          return (

            <AngledSection className={`work-section-${i} ${backgroundColor}`} mask='angle--both-left-right'>
              <FeatureBlock key={ caseStudy.slug } imagePosition={imagePosition} caseStudy={caseStudy} />
            </AngledSection>
          )

        })

      }

    </div>

  </React.Fragment>
)})
