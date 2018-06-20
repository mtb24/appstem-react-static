import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import backgroundImage from '../../../public/assets/images/main-pages/bg_contact_page.jpg'
import Cta from '../layout/page-section/cta'
import AngledSection from '../layout/page-section/angled-section'
import ContactForm from '../forms/contact-form'
import './contact.scss'

export default withRouteData(({ contact }) => (
  <React.Fragment>    
    <Hero title={ contact.title } 
          heroType='image' 
          backgroundImage={ backgroundImage } 
          className='angle--bottom-right' />
    <AngledSection className='contact' mask='angle--both-left-right'>
      <div className='content-wrapper'>

        <Cta heading={convert(contact.heading)} />

        <ContactForm />

        <Cta className='view-openings-wrapper' heading='Join Us'>
          <p>Join Appstem! We are always looking for new talents. Check out our openings.<br/>If you can’t find what are you looking for send us an email. </p>
          <Link to='/careers' className='all-caps openings-link'>View Openings</Link><span className='openings-link-arrow'> > </span>
        </Cta>

      </div>
    </AngledSection>
  </React.Fragment>
))
