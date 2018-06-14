import React from 'react'
import './angled-section.scss'

export default props => {

    const mask = props.mask || 'angle--bottom-right';
    
    return (
        <div className={ `angled-section ${ mask } ${ props.className || '' }` }>
            { props.children }
        </div>
    )
}
