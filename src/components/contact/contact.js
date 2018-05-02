import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import './contact.css'
import backgroundImage from './contact-background.png'
import { Form, Text, TextArea } from 'react-form'

const validate = value => ({
  error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
  warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
  success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
})

export default withRouteData(({ contact }) => (
  <div className='contact-wrapper'>
    <Hero title={ contact.title } backgroundImage={ backgroundImage } />
    <h1>{convert(contact.heading)}</h1>
    <hr className='hr-contact-heading' />
    <Form>
    {formApi => (
      <form onSubmit={formApi.submitForm} id="contact-form" className="contact-form">

        <div className='contact-form-field-wrapper'>
          <label className='all-caps' htmlFor="name">First name</label>
          <Text field="name" id="name" name='name' validate={validate} />
        </div>
        
        <div className='contact-form-field-wrapper'>
          <label className='all-caps' htmlFor="email">Email</label>
          <Text field="email" id="email" name='email' validate={validate} />
        </div>
        
        <div className='contact-form-field-wrapper'>
          <label className='all-caps' htmlFor="phone">Phone</label>
          <Text field="phone" id="phone" validate={validate} />
        </div>
        
        <div className='contact-form-field-wrapper'>
          <label className='all-caps' htmlFor="company">Company/Organization</label>
          <Text field="company" id="company" validate={validate} />
        </div>
        
        <div className='contact-form-field-wrapper'>
          <label className='all-caps' htmlFor="project">Tell us about your project</label>
          <TextArea field="project" id="project" validate={validate} />
        </div>

        <button type="submit" className="contact-form-submit all-caps">Send</button>

      </form>
    )}
    </Form>
    <Link to='#' style={{ margin: '25vh auto' }}>{convert(contact.contents)}</Link>
  </div>
))
