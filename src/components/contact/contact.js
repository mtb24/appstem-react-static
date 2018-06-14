import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import backgroundImage from '../../../public/assets/images/main-pages/bg_contact_page.jpg'
import { Form, Text } from 'react-form'
import Cta from '../layout/page-section/cta'
import { ClipLoader } from 'react-spinners'
import ConfirmationModal from '../confirmationModal/confirmation-modal'
import Button from '../buttons/base-button/button'
import AngledSection from '../layout/page-section/angled-section'
import './contact.scss'

const validate = value => ({
  
  // TODO: validation is not complete
  
  error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
  warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
  success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
})

const handleFormSubmit = (values, e, formApi) => {
  console.log('submitted values: ', values)
}

// const checkForValue = inputEl => {
//   console.log('el changed: ', inputEl)
//   if (inputEl) {
//     if(inputEl.value) {
//       inputEl.classList.add('has-value')
//     } else {
//       inputEl.classList.remove('has-value')
//     }
//   }
// }

export default withRouteData(({ contact }) => (
<React.Fragment>
  
  <Hero title={ contact.title } 
        heroType='image' 
        backgroundImage={ backgroundImage } 
        className='angle--bottom-right' />
  <AngledSection className='contact' mask='angle--both-left-right'>
    <div className='content-wrapper'>

      <Cta heading={convert(contact.heading)} />

      <Form onSubmit={ submittedValues => handleFormSubmit(submittedValues) }>
      {formApi => (
        <form action='#' id="contact-form" className="contact-form" >

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

          <Button linkTo='#' className="contact-form-submit" buttonText='Send'/>

        </form>
      )}
      </Form>

      <Cta className='view-openings-wrapper' heading='Join Us'>
        <p>Join Appstem! We are always looking for new talents. Check out our openings.<br/>If you can’t find what are you looking for send us an email. </p>
        <Link to='/careers' className='all-caps openings-link'>View Openings</Link><span className='openings-link-arrow'> > </span>
      </Cta>

    </div>
  </AngledSection>
</React.Fragment>
))
