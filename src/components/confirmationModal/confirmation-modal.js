import React from 'react'
import ReactModal from 'react-modal'
import Cta from '../layout/page-section/cta'
import './confirmation-modal.scss'

ReactModal.setAppElement('#root')

class ConfirmationModal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            showModal: false
        }
        
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }
    
    handleOpenModal () {
        this.setState({ showModal: true })
    }
    
    handleCloseModal () {
        this.setState({ showModal: false })
    }

    toggleModal () {
        this.setState({ showModal: !this.state.showModal })
    }
    
    render() {
        return (
            <React.Fragment>                
                <ReactModal 
                    isOpen={this.props.show}
                    contentLabel='confirmation - email form sucessfully submitted'
                    onRequestClose={this.handleCloseModal}
                    className='modal'
                    overlayClassName='backdrop'>

                    <Cta heading='Thank You!'>
                        <p>Your message has been sent successfully. We will be in contact soon.</p>
                        <button onClick={this.handleCloseModal} className='all-caps'>Ok</button>
                    </Cta>

                </ReactModal>
            </React.Fragment>
        )
    }
}
export default ConfirmationModal
