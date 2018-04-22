import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

import './home.css'

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <section>
      {convert(reactStatic.contents)}
    </section>
    <section>
      {convert(jdown.contents)}
    </section>
  </div>
))
