import React from 'react'
import Slider from 'react-slick'
import Cta from '../layout/page-section/cta'
import './testimonials.scss'

export default (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className={`testimonial-slider ${props.className || ''}`}>
            <Cta heading={`${props.heading || 'Testimonials'}`}>
                <Slider {...settings}>
                    <React.Fragment>
                        <div className='testimonial-content'>Appstem did an exceptional job building Tesla’s Marketing iPad App. We are tough customers, expecting the same excellence in our app designs and interactions as our cars, and Appstem delivered a fantastic product.</div>
                        <div className='quote-author-wrapper'>
                            <hr className='hr-green'/>
                            <div className='testimonial-author'>Nick</div>
                            <div className='testimonial-company'>Tesla Motors</div>
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <div className='testimonial-content'>Appstem did an exceptional job building Tesla’s Marketing iPad App. We are tough customers, expecting the same excellence in our app designs and interactions as our cars, and Appstem delivered a fantastic product.</div>
                        <div className='quote-author-wrapper'>
                            <hr className='hr-green'/>
                            <div className='testimonial-author'>John</div>
                            <div className='testimonial-company'>Some Company</div>
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <div className='testimonial-content'>Appstem did an exceptional job building Tesla’s Marketing iPad App. We are tough customers, expecting the same excellence in our app designs and interactions as our cars, and Appstem delivered a fantastic product.</div>
                        <div className='quote-author-wrapper'>
                            <hr className='hr-green'/>
                            <div className='testimonial-author'>Mike</div>
                            <div className='testimonial-company'>Another Company</div>
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <div className='testimonial-content'>Appstem did an exceptional job building Tesla’s Marketing iPad App. We are tough customers, expecting the same excellence in our app designs and interactions as our cars, and Appstem delivered a fantastic product.</div>
                        <div className='quote-author-wrapper'>
                            <hr className='hr-green'/>
                            <div className='testimonial-author'>Adriana</div>
                            <div className='testimonial-company'>ABC</div>
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <div className='testimonial-content'>Appstem did an exceptional job building Tesla’s Marketing iPad App. We are tough customers, expecting the same excellence in our app designs and interactions as our cars, and Appstem delivered a fantastic product.</div>
                        <div className='quote-author-wrapper'>
                            <hr className='hr-green'/>
                            <div className='testimonial-author'>Jenny</div>
                            <div className='testimonial-company'>Sopwith Camels, Inc</div>
                        </div>
                    </React.Fragment>
                </Slider>
            </Cta>
        </div>
)}