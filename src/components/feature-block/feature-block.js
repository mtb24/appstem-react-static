import React from 'react'
import convert from 'htmr'
import { Link } from 'react-static'
import Arrow from './arrow_white.png'
import ImageBox from '../image-box/image-box'
import './feature-block.scss'

export default props => {
    
    if(!props.caseStudy) return null 
    else {
        console.log('caseStudy from work page: ', props.caseStudy)
        const pathToImages = `assets/images/case-studies/${props.caseStudy.slug}`

        return (
            <div className={ `feature-block-wrapper feature-image-${ props.imagePosition } ${ props.className }`}>

                <ImageBox key={ `image-${props.caseStudy.slug}` } 
                          image={ `${pathToImages}/medium/${props.caseStudy.imageName}` }
                          className='feature-block-image'
                          alt={ props.caseStudy.imageAlt || 'an image' } />

                <div className='feature-block-details'>

                    <h2>{ props.caseStudy.title }</h2>

                    <p className='feature-block-project-type'>{ props.caseStudy.type }</p>

                    <div className='feature-block-project-description'>{ convert( props.caseStudy.contents ) }</div>

                    <Link to={`/work/${ props.caseStudy.slug }/`}>View the case study <img src={ Arrow } alt='White arrow icon' /></Link>

                </div>

            </div>
        )
    }
}