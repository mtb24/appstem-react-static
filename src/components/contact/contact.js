import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import './contact.css'
import backgroundImage from './contact-background.png'

export default withRouteData(({ contact }) => (
  <div className='contact-wrapper'>
    <Hero title={ contact.title } backgroundImage={ backgroundImage } />
    {convert(contact.contents)}
  </div>
))
