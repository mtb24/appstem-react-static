import React from 'react'
import './image-hero.scss'

export default (props) => (
    <div className={`hero image-hero ${props.className || ''}`} 
         style={ 
             {
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
                 url(${props.backgroundImage})`,
                 backgroundRepeat: 'no-repeat', 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center center'
            }
        }>
        <h1 className='title'>{ props.title || 'Default Title' }</h1>
    </div>
)