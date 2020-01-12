import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Card from '../components/card/card'
import Section from '../components/section/section'
import Wave from '../components/wave/wave'
import Cell from '../components/cell/cell'
import cardData from '../../static/data.json'

const SectionCellGroup = styled.section`
	padding: 4em 0;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0 auto;
		max-width: 1000px;
	}
`

export default () => (
	<Layout>
		<section className="hero">
			<div className="hero__group">
				<h1>Learn how to design and code React apps</h1>
				<p>Complete courses about the best tools and design systems.</p>
				<Link to="/">Watch video</Link>
			</div>

			<Wave />
		</section>

		<section className="cards">
			<div className="cards__group">
				<Card 
					image="../../images/bg-1.jpg"
					title="React for designers" 
					text="12 sections" />

				<Card 
					image="../../images/bg-2.jpg"
					title="CSS Grid" 
					text="18 sections" />

				<Card 
					image="../../images/bg-3.jpg"
					title="SVG Animations" 
					text="8 sections" />
				
				<Card 
					image="../../images/bg-4.jpg"
					title="Design systems" 
					text="21 sections" />
				
				<Card 
					image="../../images/bg-5.jpg"
					title="User experience design" 
					text="28 sections" />
			</div>
		</section>

		<Section
			image="../images/bg-1.jpg"
			title="React for designers"
			text="Learn how to build a modern site using React and the most effieceint tools to get your site online. Get familar with CSS Grid, animations, interations, dynamic data, and more." 
		/>

		<SectionCellGroup>
			{cardData.cells.map((cell, index) => (
				<Cell key={index} title={cell.title} image={cell.image} />
			))}
		</SectionCellGroup>
	</Layout>
)