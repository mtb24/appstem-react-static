import React from 'react'

export default (props) => {
    const Heading = `h${props.headingLevel || '2'}`
    return (
        <Heading className={`all-caps ${ props.className || '' }`}>{props.children || 'Default Heading'}</Heading>
    )
}