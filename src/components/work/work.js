import React from 'react'
import { withRouteData, Link } from 'react-static'
import Hero from '../hero/hero'
import backgroundImage from '../../../public/assets/images/main-pages/large/bg_portfolio.png'
import './work.scss'
import FeatureBlock from '../feature-block/feature-block';

export default withRouteData(({ work }) => {
  
  return (

  <React.Fragment>

    <Hero title='Our Work' 
          heroType='image' 
          backgroundImage={ backgroundImage }
          className='angle--bottom-right' />

    <div className='work-wrapper angle--top-left'>

      {
        work.map( (caseStudy, i) => {

          let imagePosition = ( i % 2 == 0 )? 'left' : 'right'

          return (

            <FeatureBlock key={ caseStudy.slug } imagePosition={imagePosition} caseStudy={caseStudy} />

          )

        })

      }

    </div>

  </React.Fragment>
)})
