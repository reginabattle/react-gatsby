import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.footer `
	background: #f1f3f5
	padding: 3em 0;
`

const LinkGroup = styled.div`
	display: grid;
	grid-gap: 10px;
	align-items: center;
	justify-items: center;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		max-width: 300px;
		margin: 0 auto;
	}
`

const Copyright = styled.div`
	font-size: 0.95rem;
	text-align: center;
	margin: 2em auto 0;
	
	@media (min-width: 768px) {
		max-width: 500px;	
	}
`

const Footer = ({data, children}) => (
	<FooterGroup>
		<LinkGroup>
			{data.allContentfulLink.edges.map(edge => (
				<a href={edge.node.url}>{edge.node.title}</a>
			))}
		</LinkGroup>
		<Copyright>{children}</Copyright>
	</FooterGroup>
)

export default Footer