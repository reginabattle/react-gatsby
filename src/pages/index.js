import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import Card from '../components/card/card'
import CardList from '../components/card/card-list'
import Section from '../components/section/section'
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
		<Hero />
		<CardList>
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
		</CardList>

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