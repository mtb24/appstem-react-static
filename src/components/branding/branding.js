import React from 'react'
import Heading from '../layout/page-section/heading'
import BrandingItem from './branding-item'
import './branding.scss'

const Branding = (props) => {

    const output = (props.brandItems && props.brandItems.length > 0)
    ? props.brandItems.map( (item, i) => (

        // each item has a heading as element[0], and an image array as element[1]
        <div key={i} className='brand-item'>
            <Heading>{ item[0] }</Heading>
            <BrandingItem slug={ props.slug } images={ item[1] } />
        </div>
    ))

    : null
    
    return (
        <div className={ `branding ${ props.brandItems.className || '' }`}>
        { output }
        </div>
)}
export default Branding
