import React from 'react'
import './angled-section.scss'

export default props => {

    const mask = props.mask || 'angle--bottom-right';
    
    return (
        <section className={ `angled-section ${ props.className } ${ mask }` }>
            { props.children }
        </section>
    )
}
