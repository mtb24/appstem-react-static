import React from 'react'
import ReactModal from 'react-modal'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
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
          this.getFormData = this.getFormData.bind(this)
          this.handleOpenModal = this.handleOpenModal.bind(this)
          this.handleCloseModal = this.handleCloseModal.bind(this)
          this.toggleModal = this.toggleModal.bind(this)
          this.postForm = this.postForm.bind(this)
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
      this.postForm( this.getFormData(), '/contact-form' )
    }
  
    getFormData () {
        const formData = new FormData()
        formData.append('name', this.refs.name.value)
        formData.append('email', this.refs.email.value)
        formData.append('phone', this.refs.phone.value)
        formData.append('company', this.refs.company.value)
        formData.append('project', this.refs.project.value)
        return formData
    }
    
    postForm(formDataObject, destination) {

      const mock = new MockAdapter(axios, { delayResponse: 2000 })
        mock.onPost('/contact-form')
            
          .reply(function(config) {
              
            return new Promise( (resolve, reject) => {
                
              setTimeout( () => {
                  
                // turn on random error testing by value > 0 (ie 0.1)
                Math.random() > 0.0
                  ? resolve([200,
                    {
                      type: 'success',
                      message: 'Success!',
                      data: [...formDataObject.entries()],
                    }])
                  : resolve([408,
                    {
                      type: 'error',
                      loading: false,
                      status: 'error',
                      message: 'Server request has timed out',
                      showModal: false,
                    }])
              } , 2000)
            })
            .then( document.getElementById('contact-form').reset() )
        })
        
        // console.log('state before: ',this.state)

        axios({
          method: 'post',
          url: destination,
          data: formDataObject,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then( (response) => {
            // success
            this.setState({
              type: response.data.type || 'success',
              message: response.data.message || 'Default Success message', 
              status:  'sent',
              showModal: true,
              loading: false,
              data: response.data,
            })
            console.log('success response: ', response)
            console.log('state after success: ', this.state)
        })
        .then( document.getElementById('contact-form').reset() )
        .catch( (response) => {
            // error
            this.setState({
              type: 'error',
              message: response || 'An unknown error has occured', 
              status:  'sent',
              showModal: false,
              loading: false,
            })
            console.log('error response: ', response)
            console.log('state after error: ', this.state)
        })
    }
  
    render () {
      return (
        <React.Fragment>
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

              <div id="status" className={'alert ' + `alert-${this.state.type || ''}`} ref="status">{this.state.message || ''}</div>
  
              <Button type='submit' className='contact-form-submit' buttonText={ this.state.loading === false ? 'Send' : <ClipLoader color={'#ffffff'} loading={ this.state.loading } /> }/>

          </form>
          <ReactModal 
                isOpen={ this.state.showModal }
                contentLabel='confirmation - contact form sucessfully submitted'
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