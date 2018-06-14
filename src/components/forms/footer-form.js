import React from 'react'
import { Form, Text } from 'react-form'
import './footer-form.scss'


export const FooterForm = props => (


    <Form onSubmit={ submittedValues => handleFormSubmit(submittedValues) }>
        {
            formApi => (
                <form action='#' id="footer-email-form" className="footer-form" >
                    <Text field="email" className="email-address-field" name='email-address-field' />
                    <label htmlFor="email-address-field" className='footer-email-label'>Your email...</label>
                    <button type="submit" className="footer-form-submit-button" />
                </form>
            )
        }
    </Form>
)