import React from 'react'
import './cta.scss'

export default (props) => (
    <section className={ `cta-wrapper ${ props.className || '' }` }>
        <h2 className='all-caps'>{ props.heading }</h2>
        <hr className='hr-green'/>
        { props.children }
    </section>
)