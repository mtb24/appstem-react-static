
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

import './culture.css'

export default withRouteData(({ culture }) => (
  <div>
    {convert(culture.contents)}
  </div>
))
