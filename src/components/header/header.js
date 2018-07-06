import React from 'react'
import { Link } from 'react-static'
import { HeaderNav } from '../nav/nav'
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
            setTimeout(() => {
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
            }, 250)

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
                        <picture className='header-logo'>
                            <source srcSet='/assets/images/icons/ic-appstem-logo@2x.png 2x, /assets/images/icons/ic-appstem-logo@3x.png 3x' />
                            <img alt='Appstem company logo' src='/assets/images/icons/ic-appstem-logo.png' />
                        </picture>
                    </Link>

                    <label htmlFor='nav-toggle' className='nav-toggle-label'><span></span></label>
                    <input type='checkbox' id='nav-toggle' className='nav-toggle'/>
                    
                    <HeaderNav className='header-nav' />

                </div>
            </header>

        )
        
    }

}
export default Header