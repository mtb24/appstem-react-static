import React from 'react'
import convert from 'htmr'
import { Link } from 'react-static'
import Arrow from './arrow_white.png'

import './feature-block.scss'

export default props => {

    return (
    <div className={`feature-block-wrapper feature-image-${props.imagePosition}`}>
        { !props.caseStudy.imageURL ? null: (<img src={props.caseStudy.imageURL} className='feature-block-image' alt={props.caseStudy.imageAlt} />) }
        <div className='feature-block-details'>
            <h4>{ props.caseStudy.title }</h4>
            <p>{ props.caseStudy.type }</p>
            <p>{ convert(props.caseStudy.contents) }</p>
        </div>
        <Link to='#'>View the case study <img src={Arrow} alt='White arrow icon' /></Link>
    </div>
)}