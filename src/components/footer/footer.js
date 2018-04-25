import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
import SocialIcons from '../social/social-icons'

import './footer.css'

export default () => (
    <div className={ 'footer-wrapper' }>
        <Nav />
        <SocialIcons/>
    </div>
)
