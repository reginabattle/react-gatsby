import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

export default ({ children }) => (
	<>
		<Header />
		<main className="content">
			{children}
		</main>
		<Footer>&copy; 2020</Footer>
	</>
)

