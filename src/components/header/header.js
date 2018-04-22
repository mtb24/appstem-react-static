import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'

import './header.css'

export default () => (
    <div className={ 'header-wrapper' }>
        <Link to="/">Appstem</Link>
        <Nav />
    </div>
);