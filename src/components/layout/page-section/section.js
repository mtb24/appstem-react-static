import React from 'react'

export default props => {
    
    return (
        <div className={ `full-section ${ props.className || '' }` } style={ props.style }>
            { props.children }
        </div>
    )
}
