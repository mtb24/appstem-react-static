import React from 'react'
import { SiteData, Link } from 'react-static'
import { Form, Text } from 'react-form'
import Nav from '../nav/nav'
import SocialIcons from '../social/social-icons'
import './footer.scss'

export default () => (
    <footer className='footer angle--top-left'>
        <div className='footer-grid'>
            <Nav className={'all-caps footer-nav'} />

            <div className='footer-contact-info'>

                <div className='footer-addresses'>
                    <h4 className='all-caps footer-heading'>Contact</h4>
                    <SiteData>
                        {({ email, phone }) => (
                            <div className='footer-address-block'>
                                <Link to={`mailto:${email} `} className='email-link'>{ email }</Link><br/>
                                <Link to='https://appstem.com/tel:4159567400' className='phone-mumber'>{ phone }</Link>
                            </div>
                        )}
                    </SiteData>
                    <h4 className='all-caps footer-heading'>San Francisco</h4>
                    <SiteData>
                        {({ address1SF, address2SF, address3SF }) => (
                            <div className='footer-address-block'>
                                <Link to='https://www.google.com/maps/place/133+Kearny+St+%23202,+San+Francisco,+CA+94108/@37.7892453,-122.4062233,17z/data=!3m1!4b1!4m5!3m4!1s0x80858089a8f21ec5:0xc07a2848e4cc2bd0!8m2!3d37.7892453!4d-122.4040346'>
                                    <address>{ address1SF }<br/>{ address2SF }<br/>{ address3SF }</address>
                                </Link>
                            </div>
                        )}
                    </SiteData>
                    <h4 className='all-caps footer-heading'>Portland</h4>
                    <SiteData>
                        {({ address1PT, address2PT }) => (
                            <div className='footer-address-block'>
                                <Link to='https://www.google.com/maps/place/5911+NE+28th+Ave,+Portland,+OR+97211/@45.5654942,-122.6395568,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a6e6612dbb67:0xd252bfc0f0742b2a!8m2!3d45.5654942!4d-122.6373628?hl=en'>
                                    <address>{ address1PT }<br/>{ address2PT }</address>
                                </Link>
                            </div>
                        )}
                    </SiteData>
                </div>

                <div className='footer-email-form-wrapper'>
                    <div className='footer-form-heading all-caps'>Join Our Mail List</div>
                    <Form>
                        {formApi => (
                        <form action="window.open( String( 'mailto:kendowney.com^gmail.com' ).replace('^', '@') );" encType="text/plain" id="footer-email-form">
                            <Text field="footerEmail" id="footerEmail" name='add-to-email-list' />
                            <label htmlFor="footerEmail" className='footer-email-label'>Your email...</label>
                            <button type="submit" className="footer-email-submit-button" />
                        </form>
                        )}
                    </Form>
                </div>

                <SocialIcons />

            </div>
        </div>
    </footer>
)
