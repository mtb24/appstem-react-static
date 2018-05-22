import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Footer from './components/footer/footer'
import './app.scss'

const App = () => (
  <Router>
    <div className='app-wrapper'>
      <Routes />
      <Footer />
      <div className='page-bottom'>
        <div className='footer-copyright all-caps'>© 2018 APPSTEM MEDIA LLC. All Rights Reserved.</div>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
