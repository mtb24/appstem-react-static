import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import './contact.scss'
import backgroundImage from '../../../public/assets/images/main-pages/large/bg_contact_page.jpg'
import { Form, Text } from 'react-form'
import Cta from '../layout/page-section/cta'

const validate = value => ({
  
  // TODO: validation is not complete
  
  error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
  warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
  success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
})

const handleFormSubmit = (values, e, formApi) => {
  // API token
  const token = 'e3da9972-9ac2-4577-b725-ddc217585148'
  console.log('submitted values: ', values)
  Email.send(
    "from@you.com",
    "to@them.com",
    "This is a subject",
    "this is the body",
    {token: "63cb3a19-2684-44fa-b76f-debf422d8b00"},
    function done(message) { alert("sent") }    
  )
}

export default withRouteData(({ contact }) => (
<React.Fragment>
  
  <Hero title={ contact.title } 
        heroType='image' 
        backgroundImage={ backgroundImage } 
        className='angle--bottom-right' />

  <div className='contact-wrapper angle--bottom-right'>

    <Cta heading={convert(contact.heading)} />

    <Form onSubmit={ submittedValues => handleFormSubmit(submittedValues) }>
    {formApi => (
      <form action="mailto:kendowney.com@gmail.com" method="post" encType="text/plain" id="contact-form" className="contact-form" >

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

    <Cta className='view-openings-wrapper' heading='Join Us'>
      <p>Join Appstem! We are always looking for new talents. Check out our openings.<br/>If you can’t find what are you looking for send us an email. </p>
      <Link to='/careers' className='all-caps openings-link'>View Openings <span className='openings-link-arrow'> > </span></Link>
    </Cta>

  </div>
</React.Fragment>
))
