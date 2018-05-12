import React from 'react'
import { withRouteData, Link } from 'react-static'
import Hero from '../hero/hero'
import backgroundImage from './work-background.png'
import './work.css'

export default withRouteData(({ work }) => (
  <div className='work-wrapper'>
    <Hero title='Our Work' backgroundImage={ backgroundImage } />

    <ul>
      {work.map(caseStudy => (
        <li key={caseStudy.slug}>
          <Link to={`/work/${caseStudy.slug}/`}>{caseStudy.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
