import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import Cta from '../layout/page-section/cta'
import ImageBox from '../image-box/image-box'
import backgroundImage from './services-background.png'
import startupImage from '../../../public/assets/images/main-pages/icons/ic_startup.png'
import redesignImage from '../../../public/assets/images/main-pages/icons/ic_redesign.png'
import revolutionImage from '../../../public/assets/images/main-pages/icons/ic_revolution.png'
import leftArrow from '../../../public/assets/images/main-pages/icons/left-arrow.png'
import rightArrow from '../../../public/assets/images/main-pages/icons/right-arrow.png'
import './services.scss'

export default withRouteData(({ services }) => (
  <React.Fragment>

    <Hero title='Service' 
          heroType='image' 
          backgroundImage={ backgroundImage } 
          className='angle--bottom-right' />
    
    <div className='services-wrapper angle--bottom-right'>
      
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
      
      <Cta className='our-expertise angle--top-left' heading='Our Expertise'>

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
      <div className='see-what-we-made angle--bottom-right'>
        <div className='swm-top-left all-caps'><img src={ leftArrow } alt='Left arrow icon'/> See What We Made</div>
        <div className='swm-bottom-right all-caps'>Let's Get In Touch <img src={ rightArrow } alt='Right arrow icon'/></div>
      </div>
    
    </div>

    </React.Fragment>
))
