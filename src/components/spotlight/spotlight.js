import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

import './spotlight.css'

export default withRouteData(({ spotlight }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{spotlight.title}</h3>
    {convert(spotlight.contents)}
  </div>
))
