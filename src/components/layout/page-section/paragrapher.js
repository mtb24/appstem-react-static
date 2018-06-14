import React from 'react'

// loops through provided array
// returns paragraphs or null

const Paragrapher = ({paragraphs}) => (
    <React.Fragment>
    {
        (paragraphs && paragraphs.length > 0)
            ?   paragraphs.map( (paragraph, i) => (
                    <p key={i}>{ paragraph }</p>
                ))
            : null
    }
    </React.Fragment>
)
export default Paragrapher