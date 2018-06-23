import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
import Img from 'react-image'
import Logo from '../../../public/assets/images/icons/Appstem-Logo_green.png'
import { BeatLoader } from 'react-spinners'
import './header.scss'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHeader: 'initial',
            ticking: false,
            targetHeight: 344,
            animationId: null,
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.calculateScroll = this.calculateScroll.bind(this)
        this.handleNavClicks = this.handleNavClicks.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
        document.getElementsByClassName('nav-toggle').length > 0 &&
        document.getElementsByClassName('nav-toggle')[0].addEventListener('click', this.handleNavClicks)
    }
    
    componentWillUnmount() {
        if (this.state.animationId !== null) { cancelAnimationFrame(this.state.animationId) }
        window.removeEventListener('scroll', this.handleScroll)
        document.getElementsByClassName('nav-toggle')[0].removeEventListener('click', this.handleNavClicks)
    }
    handleNavClicks() {
        const mobileNavIsOpen = document.getElementsByClassName('nav-toggle')[0].checked || ''
        if (mobileNavIsOpen) {
            const navLinks = document.querySelectorAll('.main-header a')
            navLinks.forEach((linkEl) => {linkEl.addEventListener('click', this.closeNav)})
        }
    }
    closeNav() {
        document.getElementsByClassName('nav-toggle')[0].checked = false
    }
    handleScroll() {
        if (this.state.animationId !== null) { cancelAnimationFrame(this.state.animationId) }
        const animationId = window.requestAnimationFrame(this.calculateScroll)
        this.setState({animationId: animationId})
    }
    calculateScroll() {
        if (!this.state.ticking) {
            if (window.scrollY > this.state.targetHeight) {
                this.setState({
                    showHeader: 'leave',
                });
            } else {
                this.setState({
                    showHeader: 'initial',
                })
            }
            this.setState({
                ticking: true,
            })
        } else {
            this.setState({
            ticking: false,
        })}
    }

    render() {
        
        return (

            <header ref='header' className={`main-header header-${this.state.showHeader}`}>
                <div className='header-max'>

                    <Link to="/">
                        <Img className='header-logo'
                            src={ Logo }
                            alt='Appstem company logo'
                            loader={ <BeatLoader color={'#3cd52e'} loading={ true } /> } />
                    </Link>

                    <label htmlFor='nav-toggle' className='nav-toggle-label'><span></span></label>
                    <input type='checkbox' id='nav-toggle' className='nav-toggle'/>
                    
                    <Nav className='header-nav' />

                </div>
            </header>

        )
        
    }

}
export default Header