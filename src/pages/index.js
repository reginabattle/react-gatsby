import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (

	<main className="content">
		<section className="hero">
			<div className="hero__group">
				<h1>Learn how to design and code React apps</h1>
				<p>Complete courses about the best tools and design systems.</p>
				<Link to="/page-2">Watch video</Link>
			</div>
		</section>

		<section className="cards">
			<div className="cards__group">
				<Card 
					image="https://images.unsplash.com/photo-1551182112-94fbf507444e" 
					title="React for designers" 
					text="12 sections" />

				<Card 
					image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853"
					title="CSS Grid" 
					text="18 sections" />

				<Card 
					image="https://images.unsplash.com/photo-1550353175-a3611868086b"
					title="SVG Animations" 
					text="8 sections" />
				
				<Card 
					image="https://images.unsplash.com/photo-1551182112-94fbf507444e" 
					title="Design systems" 
					text="21 sections" />
				
				<Card 
					image="https://images.unsplash.com/photo-1550353175-a3611868086b"
					title="User experience design" 
					text="28 sections" />
			</div>
		</section>

	</main>
)

export default IndexPage
