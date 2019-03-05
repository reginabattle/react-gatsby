import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
	background-image: url(${props => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	padding: 6em 0;
	margin-bottom: 4em;
`

const SectionTitleGroup = styled.div `	
	display: grid;
	align-items: center;
	justify-items: center;
	max-width: 1200px;
	margin: 0 auto;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`
const SectionTitle = styled.h3`
	color: #fff;
	font-size: 2rem;
`

const SectionText = styled.p `
	color: #fff;
  max-width: 28em;
`

const Section = props => (
	<SectionGroup image={props.image}>
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
		</SectionTitleGroup>
	</SectionGroup>
)

export default Section