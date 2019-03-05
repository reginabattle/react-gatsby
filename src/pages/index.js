import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'

const IndexPage = () => (

	<main className="content">

		<section className="hero">
			<div className="hero__group">
				<h1>Learn how to design and code React apps</h1>
				<p>Complete courses about the best tools and design systems.</p>
				<Link to="/page-2">Watch video</Link>
			</div>

			<Wave />
		</section>

		<section className="cards">
			<div className="cards__group">
				<Card 
					image={require('../images/bg-1.jpg')}
					title="React for designers" 
					text="12 sections" />

				<Card 
					image={require('../images/bg-2.jpg')}
					title="CSS Grid" 
					text="18 sections" />

				<Card 
					image={require('../images/bg-3.jpg')}
					title="SVG Animations" 
					text="8 sections" />
				
				<Card 
					image={require('../images/bg-4.jpg')}
					title="Design systems" 
					text="21 sections" />
				
				<Card 
					image={require('../images/bg-5.jpg')}
					title="User experience design" 
					text="28 sections" />
			</div>
		</section>

		<Section
			image={require('../images/bg-1.jpg')}
			title="React for designers"
			text="Learn how to build a modern site using React and the most effieceint tools to get your site online. Get familar with CSS Grid, animations, interations, dynamic data, and more." />

	</main>
)

export default IndexPage
