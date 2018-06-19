import React from 'react'
import ConfirmationModal from '../confirmationModal/confirmation-modal'
import './blog.scss'

class Blog extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = { isOpen: false }
    }
  
    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  
    render() {
      return (
        <div className="blog">
          <button onClick={this.toggleModal}>
            Open the modal
          </button>
  
          <ConfirmationModal buttonText='Ok' show={this.state.isOpen} onClose={this.toggleModal} className={ this.state.isOpen === true ? 'is-open' : 'is-closed' } />

        </div>
      );
    }
  }
  
  export default Blog;