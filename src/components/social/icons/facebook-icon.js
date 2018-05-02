import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id="facebook-icon" className={ props.className } viewBox={'0 0 40 40'} width={props.width} height={props.height}  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='title'>Link to our Facebook page</title>
            <path fill={fillcolor} d="M22.842 35.15V20.94h4.925l.737-5.537h-5.662v-3.535c0-1.603.46-2.696 2.834-2.696h3.028V4.217C28.18 4.15 26.384 4 24.292 4c-4.366 0-7.355 2.58-7.355 7.32v4.083H12v5.538h4.937v14.21h5.905z"/>
        </svg>
    )
}