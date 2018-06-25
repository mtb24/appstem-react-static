import React from 'react'

export default props => {

    const mask = props.mask || 'angle--bottom-right';
    const defaultStyle = {
        display: 'flex',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div className={ `angled-section ${ mask } ${ props.className || '' }` } style={ defaultStyle }>
            { props.children }
        </div>
    )
}
