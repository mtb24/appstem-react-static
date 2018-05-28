import React from 'react'
import { Link } from 'react-static'
import './apply-button.scss'

export default props => (
    <div className='apply-button-wrapper'><Link to={ props.linkTo }><button className='apply-button all-caps'>Apply</button></Link></div>
)