import React from 'react'
import { Link } from 'gatsby'
import styles from'./header.module.css'

// Stateful component
class Header extends React.Component {
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
			<header className={`${styles.header}${this.state.hasScrolled ? ` ${styles.hasScrolled}` : ''}`}>
				<div className={styles.group}>
					<Link to="/" className={styles.title}>Design + Code</Link>

					<nav className={styles.menu}>
						<Link to="/courses">Courses</Link>
						<Link to="/downloads">Downloads</Link>
						<Link to="/workshops">Workshops</Link>
						<Link to="/buy" className={styles.button}>Buy</Link>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header
