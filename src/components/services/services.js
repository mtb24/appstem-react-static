
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

import './services.css'

export default withRouteData(({ services }) => (
  <div>
    {convert(services.contents)}
  </div>
))
