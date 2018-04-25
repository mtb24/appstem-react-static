import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
import AppstemLogo from '../social/icons/appstem-logo'
import './header.css'

export default () => (
    <div className={ 'header-wrapper' }>
        <Link to="/"><AppstemLogo className='header-logo' width='180' height='34' fillColor='#ffffff'/></Link>
        <Nav />
    </div>
);