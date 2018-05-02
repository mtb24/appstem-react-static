import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id='arrow-right' className={ props.className } viewBox={'0 0 40 40'} width={props.width} height={props.height}  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='title'>Button to submit your email</title>
            <g transform="translate(0.000000,68.000000) scale(0.100000,-0.100000)"
fill={fillcolor} stroke="none">
            <path fill={fillcolor} d="M0 340 l0 -340 340 0 340 0 0 340 0 340 -340 0 -340 0 0 -340z m440
            -55 c-30 -31 -57 -50 -59 -44 -2 6 14 28 35 50 l38 39 -132 0 c-81 0 -132 4
            -132 10 0 6 50 10 131 10 l131 0 -36 40 c-58 64 -41 70 21 8 l58 -58 -55 -55z"/>
            </g>
        </svg>
    )
}
