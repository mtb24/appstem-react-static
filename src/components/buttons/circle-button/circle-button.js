import React from 'react'
import './circle-button.scss'

export default () => (

  <svg className="circle-svg" width='100' height='100'>
      <g>
          <circle cx='50' cy='50' r='10'></circle>    
          <text id="dash" x='46' y='57'>-</text>
      </g>
  </svg>
)