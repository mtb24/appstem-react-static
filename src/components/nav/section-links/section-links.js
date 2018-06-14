import React from 'react'
import { Link } from 'react-static'
import './section-links.scss'
import leftArrow from '../../../../public/assets/images/icons/left-arrow.png'
import rightArrow from '../../../../public/assets/images/icons/right-arrow.png'
import LinkOutlined from '../../buttons/link-outlined/link-outlined'

export default (props) => {

    const alignclass = props.centerText? 'sl-centered' : 'sl-offset' 
    
    return (
    
    <div className={`section-links ${props.className || ''}`}>

        <Link to=''>
            <div className={`${alignclass} sl-left all-caps`}>
                <img src={ leftArrow } alt='Left arrow icon'/> { props.leftText || 'Previous' }
            </div>
        </Link>

        { props.centerText? <LinkOutlined linkTo='/work' className=''>{ props.centerText }</LinkOutlined> : null }

        <Link to=''>
            <div className={`${alignclass} sl-right all-caps`}>
                { props.rightText || 'Next' } <img src={ rightArrow } alt='Right arrow icon'/>
            </div>
        </Link>
        
    </div>

)}