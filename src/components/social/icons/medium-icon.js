import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id='medium-icon' className={ props.className } viewBox={'0 0 40 40'} width={props.width} height={props.height}  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='-medium-title'>Link to our Medium page</title>
            <path fill={fillcolor} d="M38.766 9.827c-.008-.005-.014-.013-.022-.017l-.013-.007-11.123-5.675c-.076-.038-.155-.065-.235-.086-.1-.026-.202-.042-.305-.042-.426 0-.85.218-1.08.6l-6.405 10.618 8.038 13.327L38.8 10.01c.037-.063.02-.14-.034-.183zM16.056 12.8v12.088l10.53 5.372-10.53-17.46zm12.11 18.267l8.67 4.422c1.128.575 2.042.172 2.042-.9V13.308l-10.71 17.76zM14.227 9.844L3.363 4.3c-.197-.1-.383-.146-.552-.146-.476 0-.81.376-.81 1.006v23.935c0 .64.46 1.4 1.02 1.686l9.57 4.883c.246.125.48.185.69.185.596 0 1.012-.47 1.012-1.258V9.953c0-.046-.025-.088-.065-.11z"></path>
        </svg>
    )
}