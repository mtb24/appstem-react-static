import React from 'react'
import universal from 'react-universal-component'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import SectionLinks from '../nav/section-links/section-links'
import AngledSection from '../layout/page-section/angled-section'
import './case-study.scss'

export default withRouteData(({ caseStudy, caseStudiesForNav }) => {
  // console.log('caseStudiesForNav: ',caseStudiesForNav)
  // console.log('props: ',props)
    // const linkList = props.linkList || []
    const currentPage = caseStudy.slug || ''
    let prevLink = {}
    let nextLink = {}
    const currentIndex = caseStudiesForNav.find(function(value, index) {
        if(value.slug === currentPage) {
            // console.log('current index ' + index + ' -> ' + value.slug + ' -> ' + value.title)
            prevLink = caseStudiesForNav[index - 1] || caseStudiesForNav[ caseStudiesForNav.length - 1 ]
            nextLink = caseStudiesForNav[index + 1] || caseStudiesForNav[ 0 ]
            return index
        }
    })
    // console.log('prevLink: ',prevLink)
    // console.log('nextLink: ',nextLink)
    //console.log('currentIndex: ',currentIndex)
    const FailedToLoad = () => (
      <div style={{ color: 'red', padding: '2em' }} className='error'>
        <h1 style={{ left: '33%', position: 'relative' }}>Failed to load the {`${caseStudy.slug || 'ANY' }`} component!</h1>
      </div>
    )
    const Loading = () => (
      <div style={{ color: '#3cd52e', padding: '2em' }} className='loading-component'>
        <h1 style={{ left: '33%', position: 'relative' }}>Loading the {`${caseStudy.slug}`} component...</h1>
      </div>
    )
    const CaseStudyTemplate = universal(import(`./studies/${caseStudy.slug}/${caseStudy.slug}`), 
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
