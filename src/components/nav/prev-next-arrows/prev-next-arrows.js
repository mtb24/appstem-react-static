import React from 'react'
import { Link } from 'react-static'
import leftArrow from '../../../../public/assets/images/icons/left-arrow.png'
import rightArrow from '../../../../public/assets/images/icons/right-arrow.png'
import './prev-next-arrows.scss'

export default (props) => (
    <div className='prev-next-arrows'>
        <Link to={ props.prevLinkto || '/#' }><img className='left' src={ leftArrow } alt='Previous Case Study'/></Link>
        <Link to={ props.nextLinkto || '/#' }><img className='right' src={ rightArrow } alt='Next Case Study'/></Link>
    </div>
)