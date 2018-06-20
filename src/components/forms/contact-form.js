import React from 'react'
import ReactModal from 'react-modal'
//import { Form, Text } from 'react-form'
import { ClipLoader } from 'react-spinners'
import Button from '../buttons/base-button/button'
import Cta from '../layout/page-section/cta'

import '../confirmationModal/confirmation-modal.scss'

class ContactForm extends React.Component {

    constructor (props) {
          super(props)
  
          this.state = {
          type: 'info',
          message: '',
          loading: false,
          status: '',
          showModal: false,
          }
  
          this.handleSubmit = this.handleSubmit.bind(this)
          this.sendFormData = this.sendFormData.bind(this)
          this.requestBuildQueryString = this.requestBuildQueryString.bind(this)
          this.getFormData = this.getFormData.bind(this)
          this.handleOpenModal = this.handleOpenModal.bind(this)
          this.handleCloseModal = this.handleCloseModal.bind(this)
          this.toggleModal = this.toggleModal.bind(this)
    }

    handleOpenModal () {
        console.log('handleOpenModal fired')
        this.setState({ showModal: true })
    }
    
    handleCloseModal () {
        this.setState({ showModal: false })
    }

    toggleModal () {
        this.setState({ showModal: !this.state.showModal })
    }
  
    handleSubmit (event) {
      event.preventDefault()
      this.setState({ type: 'info', message: 'sending data...', loading: true })
      this.getFormData()
    }
  
    getFormData () {
      const formData = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        company: this.refs.company.value,
        project: this.refs.project.value,
      }
      
      // simulate submission for testing...
      setTimeout( () => {
        console.log('form data: ', formData)
        this.setState({ 
            type: 'success', 
            message: 'Success', 
            loading: false, 
            status: 'sent', 
            data: formData,
            showModal: true,
         })
        document.getElementById('contact-form').reset()
        // this.sendFormData()
      }, 2000 )
    }

    sendFormData () {
      const xmlhttp = new XMLHttpRequest()
    //   const _this = this
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          const response = JSON.parse(xmlhttp.responseText)
          if (xmlhttp.status === 200 && response.status === 'OK') {
            this.setState({ showModal: true, type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' })
          }
          else {
            this.setState({ type: 'error', message: 'Sorry, there has been an error' })
          }
        }
      }
      xmlhttp.open('POST', '/some-endpoint', true)
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xmlhttp.send(this.requestBuildQueryString(this.state.data))
    }
    /**
     * Transforms an object into a URL querystring.
     *
     * @param object params
     * @return string the formatted querystring.
     */
    requestBuildQueryString (params) {
      const queryString = []
      for(let property in params)
        if (params.hasOwnProperty(property)) {
          queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]))
        }
      return queryString.join('&')
    }
  
    render () {

      const Status = () => (<div id="status" className={'alert alert-' + this.state.type} ref="status">{this.state.message}</div>)
      return (
        <React.Fragment>
          <Status/>
          <form ref='contactform' onSubmit={this.handleSubmit} id="contact-form" className="contact-form" >
              <div className='contact-form-field-wrapper'>
              <input type='text' ref='name' field="name" id="name" name='name' />
              <label className='all-caps' htmlFor="name">Name</label>
              </div>
  
              <div className='contact-form-field-wrapper'>
              <input type='text' ref='email' field="email" id="email" name='email' />
              <label className='all-caps' htmlFor="email">Email</label>
              </div>
  
              <div className='contact-form-field-wrapper'>
              <input type='text' ref='phone' field="phone" id="phone" name='phone' />
              <label className='all-caps' htmlFor="phone">Phone</label>
              </div>
  
              <div className='contact-form-field-wrapper'>
              <input type='text' ref='company' field="company" id="company" name='company' />
              <label className='all-caps' htmlFor="company">Company/Organization</label>
              </div>
  
              <div className='contact-form-field-wrapper'>
              <input type='text' ref='project' field="project" id="project" name='project' />
              <label className='all-caps' htmlFor="project">Tell us about your project</label>
              </div>
  
              <Button type='submit' className='contact-form-submit' buttonText={ this.state.loading === false ? 'Send' : <ClipLoader color={'#ffffff'} loading={ this.state.loading } /> }/>

          </form>
          <ReactModal 
                isOpen={ this.state.showModal }
                contentLabel='confirmation - email form sucessfully submitted'
                onRequestClose={ this.handleCloseModal }
                className='modal'
                overlayClassName='backdrop'>

                <Cta heading='Thank You!'>
                    <p>Your message has been sent successfully. We will be in contact soon.</p>
                    <button onClick={ this.handleCloseModal } className='all-caps'>Ok</button>
                </Cta>

            </ReactModal>
        </React.Fragment>
      )
    }
  }
  
  export default ContactForm