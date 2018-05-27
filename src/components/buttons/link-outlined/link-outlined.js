import React from 'react'
import { Link } from 'react-router-dom';
import './link-outlined.scss'

export default (props) => (
    <Link to={ props.linkTo } className={`link-outlined all-caps ${props.className || ''}`}>{ props.children || null }</Link>
)