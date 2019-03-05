import React from 'react'
import Link from 'gatsby-link'
import './header.css'

// Stateful component
class Header extends React.Component {

	// Initial state 
	constructor(props) {
		super(props)

		this.state = {
			hasScrolled: false
		}
	}

	// Update state on scroll
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	// Check if user has scrolled
	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}		
	}	

	render() {
		return (
			<header className={ this.state.hasScrolled ? 'header has-scrolled' : 'header' }>
				<div className="header__group">
					<Link to="/" className="header__title">Design + Code</Link>

					<nav className="header__menu">
						<Link to="/courses">Courses</Link>
						<Link to="/downloads">Downloads</Link>
						<Link to="/workshops">Workshops</Link>
						<Link to="/buy" className="header__button">Buy</Link>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header
