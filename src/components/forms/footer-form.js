import React from 'react'
import ReactModal from 'react-modal'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Cta from '../layout/page-section/cta'
import '../confirmationModal/confirmation-modal.scss'
import './footer-form.scss'

class FooterForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            type: 'info',
            message: null,
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
        // console.log('handleOpenModal fired')
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
        formData.append('email', this.refs.email.value)
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
            .then( document.getElementById('footer-email-form').reset() )
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
            //console.log('success response: ', response)
            // console.log('state after success: ', this.state)
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

                <form ref='footer-form' onSubmit={this.handleSubmit} id="footer-email-form" className="footer-form" >
                    <label id="status" ref='status' htmlFor="email-address-field" className={`alert-${this.state.type || ''}`}>{ this.state.loading === false ? '' : <ClipLoader color={'#3cd52e'} loading={ this.state.loading } /> }</label>
                    <input ref='email' type='email' className="email-input-field" name='email' placeholder={ this.state.loading === true ? this.state.message : 'Enter your email...' } pattern='.+@.+\..+' required />
                    <button type="submit" className="footer-form-submit-button" />
                </form>

                <ReactModal 
                    isOpen={ this.state.showModal }
                    contentLabel='confirmation - email sucessfully submitted'
                    onRequestClose={ this.handleCloseModal }
                    className='modal'
                    overlayClassName='backdrop'>

                    <Cta heading='Thank You!'>
                        <p>We are adding you to our mailing list!</p>
                        <button onClick={ this.handleCloseModal } className='all-caps'>Ok</button>
                    </Cta>

                </ReactModal>
            </React.Fragment>
        )
    }
}
export default FooterForm