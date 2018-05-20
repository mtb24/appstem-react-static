import React from 'react'
import convert from 'htmr'
import { Link } from 'react-static'
import Arrow from './arrow_white.png'
//import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import './feature-block.scss'

export default props => {
    
    if(!props.caseStudy) return null 
    else {

        const pathToImages = `assets/images/case-studies/${props.caseStudy.slug}`

        return (
            <section className={ `angled-section feature-block-wrapper feature-image-${ props.imagePosition } angle--both-left-right `}> 
{/* 
                <ResponsiveImage
                    className='feature-block-image'
                    alt={ props.caseStudy.imageAlt || 'an image' }
                    imageStyle={{ width: '100%' }} >
                    <ResponsiveImageSize
                        default={ true }
                        minWidth={ 0 }
                        path={ `${pathToImages}/small/${props.caseStudy.imageName}` }
                    />
                    <ResponsiveImageSize
                        minWidth={ 768 }
                        path={ `${pathToImages}/medium/${props.caseStudy.imageName}` }
                    />
                    <ResponsiveImageSize
                        minWidth={ 1100 }
                        path={ `${pathToImages}/large/${props.caseStudy.imageName}` }
                    />
                </ResponsiveImage>
 */}
                <div className='feature-block-details'>

                    <h2>{ props.caseStudy.title }</h2>

                    <p className='feature-block-project-type'>{ props.caseStudy.type }</p>

                    <div className='feature-block-project-description'>{ convert( props.caseStudy.contents ) }</div>

                    <Link to={`/work/${ props.caseStudy.slug }/`}>View the case study <img src={ Arrow } alt='White arrow icon' /></Link>

                </div>

            </section>
        )
    }
}