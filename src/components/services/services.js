import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import backgroundImage from './services-background.png'
import './services.scss'

export default withRouteData(({ services }) => (
<React.Fragment>

  <Hero title='Service' 
        heroType='image' 
        backgroundImage={ backgroundImage } 
        className='angle--bottom-right' />
  
  <div className='services-wrapper'>
  
    <div className='services-body'>
    
      {convert(services.contents)}
    
    </div>
  
  </div>

  </React.Fragment>
))
