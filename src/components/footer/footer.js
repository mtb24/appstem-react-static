import React from 'react'
import { SiteData, Link } from 'react-static'
import { Form, Text } from 'react-form'
import Nav from '../nav/nav'
import SocialIcons from '../social/social-icons'

import './footer.css'

export default () => (

    <div className={ 'footer-wrapper' }>

        <div className='footer-body'>

            <Nav className={'all-caps footer-nav'} />

            <div className='footer-contact-info'>

                <div className='footer-addresses'>
                    <p className='all-caps footer-heading'>Contact</p>
                    <SiteData>
                        {({ email, phone }) => (
                            <div>
                                <Link to='hello@appstem.com'>{ email }</Link><br/>
                                <Link to='https://appstem.com/tel:4159567400'>{ phone }</Link>
                            </div>
                        )}
                    </SiteData>
                    <p className='all-caps footer-heading'>San Francisco</p>
                    <SiteData>
                        {({ address1SF, address2SF, address3SF }) => (
                            <div className='footer-body-address-block'>
                                <Link to='https://www.google.com/maps/place/133+Kearny+St+%23202,+San+Francisco,+CA+94108/@37.7892453,-122.4062233,17z/data=!3m1!4b1!4m5!3m4!1s0x80858089a8f21ec5:0xc07a2848e4cc2bd0!8m2!3d37.7892453!4d-122.4040346'>
                                    <address>{ address1SF }<br/>{ address2SF }<br/>{ address3SF }</address>
                                </Link>
                            </div>
                        )}
                    </SiteData>
                    <p className='all-caps footer-heading'>Portland</p>
                    <SiteData>
                        {({ address1PT, address2PT }) => (
                            <div className='footer-body-address-block'>
                                <Link to='https://www.google.com/maps/place/5911+NE+28th+Ave,+Portland,+OR+97211/@45.5654942,-122.6395568,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a6e6612dbb67:0xd252bfc0f0742b2a!8m2!3d45.5654942!4d-122.6373628?hl=en'>
                                    <address>{ address1PT }<br/>{ address2PT }</address>
                                </Link>
                            </div>
                        )}
                    </SiteData>
                </div>

                <div className='footer-email-form-wrapper'>
                    <p className='all-caps'>Join Our Mail List</p>
                    <Form>
                        {formApi => (
                        <form onSubmit={formApi.submitForm} id="footer-email-form">
                            <Text field="footerEmail" id="footerEmail" />
                            <label htmlFor="footerEmail" className='footer-email-label'>Your email...</label>
                            <button type="submit" className="footer-email-submit-button">-></button>
                        </form>
                        )}
                    </Form>
                </div>

                <SocialIcons />

            </div>

        </div>

        <div className='footer-bottom'>

            <SiteData>
                {({ copyright }) => (
                    <div className='footer-copyright all-caps'>{ copyright }</div>
                )}
            </SiteData>

        </div>

    </div>
)
