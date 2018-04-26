import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
import AppstemLogo from '../social/icons/appstem-logo'
import './header.css'

export default () => (

    <div className={ 'header-wrapper' }>

        <Link to="/">
            <AppstemLogo className='header-logo' width='175' height='40' fillColor='#fefefe'/>
        </Link>

        <Nav className='all-caps' />

    </div>

);