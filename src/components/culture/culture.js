import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import Testimonials from '../testimonials/testimonials'
import backgroundImage from './culture-background.png'

import './culture.scss'

export default withRouteData(({ culture, testimonials }) => (

  <div className='culture-wrapper'>
    <Hero title='Culture' backgroundImage={ backgroundImage } />
    {convert(culture.contents)}
    <Testimonials />
  </div>

))
