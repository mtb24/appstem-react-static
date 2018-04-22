import React from 'react'

import './section.css'

const Section = props => {
    const mask = props.mask? props.mask : '';
    return (
    <section className={ `page-section-wrapper ${mask}` }>
        { props.children }
    </section>
    )
}

export default Section;