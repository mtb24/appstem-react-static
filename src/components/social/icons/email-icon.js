import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id="email-icon" className={ props.className } viewBox={`0 0 ${props.width} ${props.height}`} width={props.width} height={props.height}  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='title'>Icon for our email address</title>
            <path fill={fillcolor} d="M1.3 0C.6 0 0 .6 0 1.3v9.4c0 .7.6 1.3 1.3 1.3h16.4c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3H1.3zM3 2h.6L9 7c.2.3.8.3 1 0l5.4-5c.3-.2.7-.2 1 0v1L13 6l3 3c.3.3.3.7 0 1 0 .2-.5.2-.8 0l-3.2-3.2L11 8c-1 .7-2 .7-3 0L6.8 6.8l-3.2 3c-.2.4-.6.4-1 0V9L6 6l-3-3c-.3-.3-.3-.7 0-1H3z"/>
        </svg>
    )
}