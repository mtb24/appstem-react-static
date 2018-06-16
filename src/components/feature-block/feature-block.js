import React from 'react'
import convert from 'htmr'
import { Link } from 'react-static'
import Arrow from '../../../public/assets/images/icons/arrow_white.png'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'
import './feature-block.scss'

const pathToImages = (slug, imageName) => `/assets/images/case-studies/${ slug }/${ imageName }`


const ImageFeatureBlock = (feature) => (
    <div className={ `${ feature.className || '' } feature-block feature-image-${ feature.imagePosition }`}>
    
        <Img
            key={ `image-${ feature.caseStudy.slug }` }
            className='feature-block-image'
            src={ pathToImages(feature.caseStudy.slug, feature.caseStudy.featureBlockImage) }
            alt={ feature.caseStudy.imageAlt || `an image for ${ feature.caseStudy.slug }` }
            loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />

        <div className='feature-block-details'>

            <h2 className='all-caps'>{ feature.caseStudy.title }</h2>

            <p className='feature-block-project-type'>{ feature.caseStudy.projectType }</p>

            <div className='feature-block-project-description'>{ feature.caseStudy.featureBlockProjectDesc }</div>

            <Link to={`/portfolio/${ feature.caseStudy.slug }/`} className='all-caps'>View the case study <img src={ Arrow } alt='Link to case studies' /></Link>

        </div>

    </div>
)
const HeroFeatureBlock = (feature) => (
    <div className={ `${ feature.className || '' } feature-block feature-image-${ feature.imagePosition }`}>
    
        <Img
            className='feature-block-image'
            src={ pathToImages(feature.caseStudy.slug, feature.caseStudy.heroFeaturedimage) }
            alt={ feature.caseStudy.imageAlt || `an image for ${ feature.caseStudy.slug }` }
            loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />

        <div className='feature-block-details'>

            <h2 className='all-caps'>{ feature.caseStudy.title }</h2>

            <p className='feature-block-project-type'>{ feature.caseStudy.projectType }</p>

            <div className='feature-block-project-description'>{ feature.caseStudy.featureBlockProjectDesc }</div>

        </div>

    </div>
)
const CaseFeatureBlock = (props) => {
    //console.log('feature block: ', props)
    const imagePath = `/assets/images/case-studies/${ props.slug }/${ props.caseStudy.featureBlockImage }` || '../../../public/assets/images/case-studies/feature-placeholder.png'
    return (
        <div className={ `feature-block feature-image-${ props.imagePosition } ${ props.className || '' }`}>
            <Img
                className='feature-block-image'
                src={ imagePath }
                alt={ `an image for ${ props.slug }` }
                loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />

            <div className='feature-block-details'>
                <h2 className='all-caps'>{ props.caseStudy.heading }</h2>
                <div className='feature-block-project-description'>{ props.caseStudy.text }</div>
            </div>
        </div>
    )
}
export default props => {
    
    if(!props.caseStudy) { return null } else {

        switch( props.imageType ) {

            case 'image':
                return <ImageFeatureBlock {...props}/>
                break
            
            case 'hero': 
                return <HeroFeatureBlock {...props}/>
                break
    
            case 'case-study-feature':
                return <CaseFeatureBlock {...props}/>
                break
            default:
                console.error('FeatureBlock component: no imageType prop was passed!', props)
                return null
        }
    }
}