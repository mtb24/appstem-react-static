import React from 'react'
import universal from 'react-universal-component'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import SectionLinks from '../nav/section-links/section-links'
import AngledSection from '../layout/page-section/angled-section'
import './case-study.scss'

export default withRouteData(({ caseStudy, caseStudiesForNav }) => {

    const currentPage = caseStudy.slug !== 'undefined' ? caseStudy.slug : ''
    let prevLink = {}
    let nextLink = {}
    const currentIndex = caseStudiesForNav.find( (value, index) => {
      // console.log('currentPage: ', currentPage)
      // console.log('current item: ' + index + ' -> ' + value.slug + ' -> ' + value.title)
      if(value.slug && value.slug === currentPage) {
        // console.log('CURRENT SLUG MATCH! ' + index + ' -> ' + value.slug + ' -> ' + currentPage)
        prevLink = caseStudiesForNav[index - 1] || caseStudiesForNav[ caseStudiesForNav.length - 1 ]
        nextLink = caseStudiesForNav[index + 1] || caseStudiesForNav[ 0 ]
        // console.log('CURRENT INDEX: ', {index, prevLink, nextLink})
        return index
      }
    })

    const FailedToLoad = () => (
      <div style={{ color: 'red', padding: '2em' }} className='error'>
        <h1 style={{ left: '33%', position: 'relative' }}>Failed to load the {`${currentPage || 'ANY' }`} component!</h1>
      </div>
    )
    const Loading = () => (
      <div style={{ color: '#3cd52e', padding: '2em' }} className='loading-component'>
        <h1 style={{ left: '33%', position: 'relative' }}>Loading the {`${currentPage}`} component...</h1>
      </div>
    )
    const CaseStudyTemplate = universal(import(`./studies/${currentPage}/${currentPage}`), 
    {
      loading: Loading,
      error: FailedToLoad,
    })

    return (
        <React.Fragment>

            <Hero heroType='case-study' 
                caseStudy={ caseStudy }
                className='angle--bottom-right'
                prevLink={ prevLink } 
                nextLink={ nextLink } />

            <div className='case-study'>
                <CaseStudyTemplate {...caseStudy} />
            </div>

            <AngledSection className='section-link-wrapper' mask='angle--bottom-right'>
              <SectionLinks className='centered' prevLink={ prevLink } nextLink={ nextLink } />
            </AngledSection>
            
        </React.Fragment>
    )
})
