import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

import './case-study.css'

export default withRouteData(({ caseStudy }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{caseStudy.title}</h3>
    {convert(caseStudy.contents)}
  </div>
))
