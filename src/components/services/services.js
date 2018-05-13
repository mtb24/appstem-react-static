import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import backgroundImage from './services-background.png'

import './services.scss'

export default withRouteData(({ services }) => (
  <div className='services-wrapper'>
    <Hero title='Service' backgroundImage={ backgroundImage } />

    {convert(services.contents)}
  </div>
))
