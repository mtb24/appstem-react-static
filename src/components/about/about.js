
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

import './about.scss'


export default withRouteData(({ about }) => (
  <div>
    {convert(about.contents)}
  </div>
))
