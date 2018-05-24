import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
//import AppstemLogo from '../social/icons/appstem-logo'
import Logo from '../../../public/assets/images/main-pages/icons/Appstem Logo_white.png'
import './header.scss'

export default () => (

    <div className={ 'header-wrapper' }>

        <Link to="/">
            {/* <AppstemLogo className='header-logo' width='175' height='40' fillColor='#fefefe'/> */}
            <img src={ Logo } alt='Appstem Logo' />
        </Link>

        <Nav className='all-caps' />

    </div>

);