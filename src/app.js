import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Header from './components/header/header'
import Routes from 'react-static-routes'
import Footer from './components/footer/footer'
import './app.scss'

const App = () => (
  <Router>
    <div className='app-wrapper'>
      <Header/>
      <Routes />
      <Footer />
      <div className='page-bottom'>
        <div className='footer-copyright'>© 2018 Appstem Media LLC. All Rights Reserved.</div>
        <div className='footer-legal'>
          <div className='footer-terms'><Link to='#'>Terms</Link></div>
          <div className='footer-sitemap'><Link to='#'>Site Map</Link></div>
        </div>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
