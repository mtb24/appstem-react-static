import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import backgroundImage from './culture-background.png'

import './culture.css'

export default withRouteData(({ culture }) => (
  <div className='culture-wrapper'>
    <Hero title='Culture' backgroundImage={ backgroundImage } />
    {convert(culture.contents)}
  </div>
))
