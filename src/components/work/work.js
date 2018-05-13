import React from 'react'
import { withRouteData, Link } from 'react-static'
import Hero from '../hero/hero'
import Section from '../layout/page-section/section'
import backgroundImage from './work-background.png'
import './work.css'
import FeatureBlock from '../feature-block/feature-block';

export default withRouteData(({ work }) => (
  <div className='work-wrapper'>
    <Hero title='Our Work' backgroundImage={ backgroundImage } />
    <Section className='mask-slope-top-right'>
      <ul>
        {work.map( (caseStudy, i) => {
          let imagePosition = ( i % 2 == 0 )? 'left' : 'right'
          return (
          <li key={caseStudy.slug}>
            <Link to={`/work/${caseStudy.slug}/`}>
              <FeatureBlock imagePosition={imagePosition} caseStudy={caseStudy} />
            </Link>
          </li>
        )})}
      </ul>
    </Section>
  </div>
))
