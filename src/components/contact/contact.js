import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import './contact.css'
import backgroundImage from './contact-background.png'
import { Form, Text } from 'react-form'

const validate = value => ({
  error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
  warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
  success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
})

const handleFormSubmit = (values, e, formApi) => {
  // how to handle form in react-form?
  console.log('submitted values: ', values)
}

export default withRouteData(({ contact }) => (
  <div className='contact-wrapper'>
    <Hero title={ contact.title } backgroundImage={ backgroundImage } />
    <h1>{convert(contact.heading)}</h1>
    <hr className='hr-contact-heading' />
    <Form onSubmit={ submittedValues => handleFormSubmit(submittedValues) }>
    {formApi => (
      <form action="mailto:kendowney.com@gmail.com" method="post" enctype="text/plain" id="contact-form" className="contact-form" >

        <div className='contact-form-field-wrapper'>
          <Text field="name" id="name" name='name' validate={validate} />
          <label className='all-caps' htmlFor="name">Name</label>
        </div>
        
        <div className='contact-form-field-wrapper'>
          <Text field="email" id="email" name='email' validate={validate} />
          <label className='all-caps' htmlFor="email">Email</label>
        </div>
        
        <div className='contact-form-field-wrapper'>
          <Text field="phone" id="phone" name='phone' validate={validate} />
          <label className='all-caps' htmlFor="phone">Phone</label>
        </div>
        
        <div className='contact-form-field-wrapper'>
          <Text field="company" id="company" name='company' validate={validate} />
          <label className='all-caps' htmlFor="company">Company/Organization</label>
        </div>
        
        <div className='contact-form-field-wrapper'>
          <Text field="project" id="project" name='project' validate={validate} />
          <label className='all-caps' htmlFor="project">Tell us about your project</label>
        </div>

        <button type="submit" className="contact-form-submit all-caps">Send</button>

      </form>
    )}
    </Form>
    <Link to='#' style={{ margin: '20vh auto' }}>{convert(contact.contents)}</Link>
  </div>
))
