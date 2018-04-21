
import React from 'react'
import { withRouteData, Link } from 'react-static'

import './work.css'

export default withRouteData(({ work }) => (
  <div>
    <h1>Work</h1>

    <ul>
      {work.map(spotlight => (
        <li key={spotlight.slug}>
          <Link to={`/work/${spotlight.slug}/`}>{spotlight.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
