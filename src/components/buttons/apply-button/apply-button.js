import React from 'react'
import { Link } from 'react-static'
import './apply-button.scss'

export default props => (
    <Link to={ props.linkTo }><button className='apply-button all-caps'>Apply</button></Link>
)