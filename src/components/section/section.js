import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.section`
	background-image: url(${props => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	padding: 6em 1.2em;
`

const SectionTitleGroup = styled.div `	
	display: grid;
	align-items: center;
	justify-items: center;
	max-width: 1200px;
	margin: 0 auto;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`
const SectionTitle = styled.h3`
	color: #fff;
	font-size: 2.75rem;
`

const SectionText = styled.p `
	color: #fff;
	font-size: 1.25rem;
  	max-width: 28em;
`

export default props => (
	<SectionGroup image={props.image}>
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
		</SectionTitleGroup>
	</SectionGroup>
)