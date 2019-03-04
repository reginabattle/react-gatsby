import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
	<main className="content">
		<div className="hero">
			<div className="hero__group">
				<h1>Learn how to design and code React apps</h1>
				<p>Complete courses about the best tools and design systems.</p>
				<Link to="/page-2">Watch video</Link>
			</div>
		</div>
	</main>
)

export default IndexPage
