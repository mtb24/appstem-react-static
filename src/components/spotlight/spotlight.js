import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

import './case-study.scss'

export default withRouteData(({ case-study }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{case-study.title}</h3>
    {convert(case-study.contents)}
  </div>
))
