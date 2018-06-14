import React from 'react'
import Heading from '../page-section/heading'
import './cta.scss'

export default (props) => {
    const headingLevel = props.headingLevel || '2'
    return (
        <div className={ `cta-wrapper ${ props.className || '' }` }>
            
            <Heading headingLevel={ headingLevel } className='top-heading'>
                { props.heading }
            </Heading>
            
            <hr className='hr-green'/>
            
            { props.children }
        
        </div>
    )
}