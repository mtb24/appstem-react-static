import React from 'react'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import Cta from '../layout/page-section/cta'
import AngledSection from '../layout/page-section/angled-section'
import SectionLinks from '../nav/section-links/section-links'
import backgroundImage from '../../../public/assets/images/main-pages/bg_services.jpg'
import startupImage from '../../../public/assets/images/icons/ic_startup.png'
import redesignImage from '../../../public/assets/images/icons/ic_redesign.png'
import revolutionImage from '../../../public/assets/images/icons/ic_revolution.png'
import './services.scss'

let prevLink = {title: 'See What We Made', slug: '/work'}
let nextLink = {title: 'Let\'s Get In Touch', slug: '/contact'}

export default withRouteData(({ services }) => (
  <React.Fragment>

    <Hero title='Service' 
          heroType='image' 
          backgroundImage={ backgroundImage } 
          className='angle--bottom-right' />

    <AngledSection className='services' mask='angle--bottom-right'>
      <div className='content-wrapper'>
      
        <Cta className='what-we-do' heading='What We Do'>

          <p>Each member of our team is an expert in mobile technology. From product development, design, native development, QA, and ongoing support, we specialize in all phases of the project lifecycle. After 6 years and over 150 mobile apps, we have a proven track record of designing and developing innovative mobile products that are better, faster, and more cost-effective than the majority of our competition.</p>
          
          <div className='services-block'>
            <img src={ startupImage }
                className='services-block-image'
                alt='an icon for startup section' />
            
            <div className='services-block-text'>
              <h2 className='all-caps'>Startup</h2>
              <p>We develop natively across iOS, Android, and Windows platforms using the latest mobile technology. Leveraging years of experience, we build performance-critical mobile apps tailored to the nuances of each platform.</p>
            </div>
          </div>
          
          <div className='services-block'>
            <img src={ redesignImage }
                className='services-block-image'
                alt='an icon for redesign section' />

            <div className='services-block-text'>
              <h2 className='all-caps'>Re-Design</h2>
              <p>We develop natively across iOS, Android, and Windows platforms using the latest mobile technology. Leveraging years of experience, we build performance-critical mobile apps tailored to the nuances of each platform.</p>
            </div>
          </div>
          
          <div className='services-block'>
            <img src={ revolutionImage }
                className='services-block-image'
                alt='an icon for revolution section' />

            <div className='services-block-text'>
              <h2 className='all-caps'>Revolution</h2>
              <p>We develop natively across iOS, Android, and Windows platforms using the latest mobile technology. Leveraging years of experience, we build performance-critical mobile apps tailored to the nuances of each platform.</p>
            </div>
          </div>
        </Cta>
        
      </div>
    </AngledSection>

    <AngledSection className='expertise' mask='angle--top-left'> 
      <Cta className='our-expertise' heading='Our Expertise'>

        <div className='expertise-block'>
          <h2 className='all-caps'>Strategy</h2>
          <p className='description'>We are bringing brand, UX and technology together with a human-centered approach.</p>
          <p className='project-type'>Research & Insights | Product Strategy<br/>Comms & Campaign Planning | Measurement</p>
        </div>
        
        <div className='expertise-block'>
          <h2 className='all-caps'>Design</h2>
          <p className='description'>We care deeply about craft and work with brands who understand the importance of investing in design.</p>
          <p className='project-type'>UI Design | UX Design<br/>Visual Design | Art Direction</p>
        </div>
        
        <div className='expertise-block'>
          <h2 className='all-caps'>Development</h2>
          <p className='description'>Rooted in technology and engineering, we’re hard-wired to prototype, build and measure results.</p>
          <p className='project-type'>Rapid Prototyping | Data Modeling<br/>Full-stack Development | Usability Testing</p>
        </div>
        
        <div className='expertise-block'>
          <h2 className='all-caps'>Content</h2>
          <p className='description'>We help our partners navigate the ever-evolving landscape of brand and innovation storytelling.</p>
          <p className='project-type'>Creative Direction | Integrated Campaign<br/>Copy & Script writing | Photography</p>
        </div>

      </Cta>
    </AngledSection>

    <AngledSection className='last-section' mask='angle--bottom-right'> 
      <SectionLinks className='see-what-we-made' prevLink={ prevLink } nextLink={ nextLink } />
    </AngledSection>

  </React.Fragment>
))
