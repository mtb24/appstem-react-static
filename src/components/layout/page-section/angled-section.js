import React from 'react'
import './angled-section.scss'

export default props => {

    const mask = props.mask || 'angle--bottom-right';
    const defaultStyle = {
        display: 'flex',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }

    return (
        <div className={ `angled-section ${ mask } ${ props.className || '' }` } style={ defaultStyle }>
            { props.children }
        </div>
    )
}
