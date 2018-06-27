import React from 'react'
import { Link } from 'react-static'
import TwitterIcon from './icons/ic_footer_twitter'
import FacebookIcon from './icons/ic_footer_fb'
//import InstagramIcon from './icons/ic_footer_instagram'
import MediumIcon from './icons/ic_footer_medium'

import './social-icons.scss'

export default () => (

    <div className={ 'social-icons-wrapper' }>

        <Link to='https://twitter.com/appstem'>  

            <TwitterIcon
                fillColor='#fafafa'
                className='social-icon-twitter'
                width='36'
                height='36'
            />

        </Link>

        <Link to='https://www.facebook.com/appstemmedia'>

            <FacebookIcon
                fillColor='#000000'
                className='social-icon-facebook'
                width='36'
                height='36'
            />

        </Link>

        <Link to='https://www.instagram.com/appstem'>

            <img
                className='social-icon-instagram'
                width='25'
                height='25'
                src='/assets/images/icons/ic_instagram-2x-inverse.png' />

        </Link>

        <Link to='https://medium.com/appstem'>
        
            <MediumIcon
                fillColor='#fefefe'
                className='social-icon-medium'
                width='36'
                height='36'
            />
            
        </Link>

    </div>
)
