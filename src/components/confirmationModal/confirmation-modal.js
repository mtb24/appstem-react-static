import React from 'react';
import PropTypes from 'prop-types';
import Cta from '../layout/page-section/cta'
import './confirmation-modal.scss'


class ConfirmationModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null
    }

    return (
      <div className={`backdrop ${ this.props.className || '' }`}>
        <div className={`modal ${ this.props.className || '' }`}>
            <Cta heading='Thank You!'>
                <p>Your message has been sent successfully. We will be in contact soon.</p>
                <button onClick={this.props.onClose} className='all-caps'>{ this.props.buttonText }</button>
            </Cta>
        </div>
      </div>
    );
  }
}

ConfirmationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default ConfirmationModal