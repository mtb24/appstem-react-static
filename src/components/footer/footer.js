import React from 'react'
import { SiteData, Link } from 'react-static'
import Nav from '../nav/nav'
import SocialIcons from '../social/social-icons'
import EmailIcon from '../social/icons/email-icon'
import PhoneIcon from '../social/icons/phone-icon'
import MapIcon from '../social/icons/map-icon'
import AppstemLogo from '../social/icons/appstem-logo'

import './footer.css'

export default () => (
    <div className={ 'footer-wrapper' }>
        <div className='footer-body'>
            <AppstemLogo width='90' height='17'/>
            <div className='footer-contact-info'>
                <SiteData>
                {({ email, phone }) => (
                    <div>
                        <Link to='hello@appstem.com'><EmailIcon fillColor='#ffffff' className='footer-email-icon' width='25' height='25'/> { email }</Link>
                        <PhoneIcon fillColor='#ffffff' className='footer-phone-icon' width='25' height='25'/><Link to='https://appstem.com/tel:4159567400'>{ phone }</Link>
                    </div>
                )}
                </SiteData>
                <SiteData>
                {({ address1, address2, address3 }) => (
                    <div>
                        <Link to='https://www.google.com/maps/place/133+Kearny+St+%23202,+San+Francisco,+CA+94108/@37.7892453,-122.4062233,17z/data=!3m1!4b1!4m5!3m4!1s0x80858089a8f21ec5:0xc07a2848e4cc2bd0!8m2!3d37.7892453!4d-122.4040346'>
                            <MapIcon className='footer-map-icon' width='20' height='20' fillColor='#ffffff'/>
                            <div>{ address1 }<br/>{ address2 }<br/>{ address3 }</div>
                        </Link>
                    </div>
                )}
                </SiteData>
            </div>
        </div>
        <Nav />
        <hr className='footer-hr'/>
        <div className='footer-bottom'>
            <SiteData>
            {({ copyright }) => (
                <div className='footer-copyright'>{ copyright }</div>
            )}
            </SiteData>
            <SocialIcons/>
        </div>
    </div>
)
