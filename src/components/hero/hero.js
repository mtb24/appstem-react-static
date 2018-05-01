import React from 'react'
import './hero.css'

export default props => (

    <div className='hero-wrapper' style={ {backgroundImage: `url(${props.backgroundImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
        <h1 className='title'>{ props.title }</h1>
    </div>
)

