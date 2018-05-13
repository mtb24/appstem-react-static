import React from 'react'

import './section.scss'

const Section = props => {
    const mask = props.mask || '';
    return (
    <section className={ `page-section-wrapper ${mask}` }>
        { props.children }
    </section>
    )
}

export default Section;