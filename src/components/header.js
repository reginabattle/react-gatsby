import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__group">
      <Link to="/" className="header__title">Design + Code</Link>

      <nav className="header__menu">
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Courses</Link>
        <Link to="/buy" className="header__button">Buy</Link>
      </nav>
    </div>
  </header>
)

export default Header
