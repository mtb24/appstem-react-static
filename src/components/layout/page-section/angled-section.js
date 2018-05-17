import React from 'react'


import './angled-section.scss'

export default props => {

    const mask = props.mask || 'angle--both-left-rightt';
    
    return (
        <section className={ `angled-section ${mask}` }>
            { props.children }
        </section>
    )
}
