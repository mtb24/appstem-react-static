import React from 'react'
import './hero.scss'

export default props => (

    <div className={`hero-wrapper ${props.className || ''}`} style={ {backgroundImage: `url(${props.backgroundImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom'}}>
        <h1 className='title'>{ props.title }</h1>
    </div>
)

