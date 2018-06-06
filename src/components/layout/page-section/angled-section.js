import React from 'react'
import './angled-section.scss'

export default props => {

    const mask = props.mask || 'angle--bottom-right';
    
    return (
        <div className={ `${ props.className || '' } angled-section ${ mask }` }>
            { props.children }
        </div>
    )
}
