import React from 'react'
import { Link } from 'react-static'
import './button.scss'

export default props => (
    <div className='button-wrapper'>
        <Link to={ props.linkTo }>
            <button type='submit' className={`button all-caps ${ props.className || '' }`}>{ props.buttonText }</button>
        </Link>
    </div>
)