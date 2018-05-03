import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './app.css'

const App = () => (
  <Router>
    <div className='app-wrapper'>
      <Header />
      <Routes />
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
