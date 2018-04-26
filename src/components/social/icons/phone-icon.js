import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id="phone-icon" className={ props.className } viewBox='-7 -14 30 30' width={props.width} height={props.height}  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='title'>Icon for our phone number</title>
            <path fill={fillcolor} d="M9 10.4c-.3 0-.5 0-.6-.2-1.6-1-3-2.3-4-4l-.2-1c0-.5 1-.8 1-1.4.3-.5 0-1-.3-1.5C4.3 1.6 3.7 1 3 .5 2.7.2 2.3 0 1.8 0 0 0-.2 3.2 0 4.5.5 6 1 7 2 8.2c1.7 2.7 4 5 7 6 1 .5 2.2.7 3.3.4.6 0 1-.3 1.5-.8.4-.4.6-1 .5-1.5 0-.6-.5-1-1-1.5-.4-.6-1-1-1.7-1.5L11 9c-.2 0-.4 0-.5.2-.4.3-.8.5-1 .8l-.6.4"/>
        </svg>
    )
}