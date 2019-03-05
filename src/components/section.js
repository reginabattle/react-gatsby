import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
	background: #eee;
	padding: 4em 0;
`

const SectionTitleGroup = styled.div `	
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;
	max-width: 1200px;
	margin: 0 auto;
`
const SectionTitle = styled.h3`
	font-size: 2rem;
`

const SectionText = styled.p `
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