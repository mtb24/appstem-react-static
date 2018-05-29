import React from 'react'
import Cta from '../layout/page-section/cta'
import Button from '../buttons/base-button/button'
import './confirmation-modal.scss'

export default (props) => (
    <div className='confirmation-wrapper'>
        <Cta heading='Thank You!'>
            <p>Your message has been sent successfully. We will be in contact soon.</p>
            <Button linkTo='#' buttonText={ props.buttonText }/>
        </Cta>
    </div>
)