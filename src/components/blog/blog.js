import React from 'react'
import ConfirmationModal from '../confirmationModal/confirmation-modal'
import './blog.scss'

export default (props) => {
  console.log('props: ', props)
  return (
        <div className='blog'>
            <ConfirmationModal buttonText='Ok'/>
        </div>
    )
}
