import React from 'react'

import './section.css'

export default props => (
    <section className={ 'page-section-wrapper' }>
        { props.children }
    </section>
)