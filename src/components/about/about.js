
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

import './about.css'


export default withRouteData(({ about }) => (
  <div>
    {convert(about.contents)}
  </div>
))
