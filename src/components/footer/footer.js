import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const FooterGroup = styled.footer `
	background: #f1f3f5
	padding: 3em 0;
`

const LinkGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		margin-right: 1em;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		max-width: 300px;
		margin: 0 auto;
	}
`

const Copyright = styled.div`
	font-size: 0.95rem;
	text-align: center;
	padding: 0 0 1.5em;
	margin: 2em auto 0;
	
	@media (min-width: 768px) {
		max-width: 500px;	
	}
`

export default ({ children, data }) => (
	<FooterGroup>
		<StaticQuery
			query={ graphql`query SiteTitleQuery {
					site {
						siteMetadata {
							title
							description
							keywords
						}
					}
					
					allContentfulFooterLinks(sort: { fields: [createdAt], order: ASC }) {
						edges {
							node {
								title
								url
								createdAt
							}
						}
					}
				}
			`}
			render={data => (
				<LinkGroup>
					{data.allContentfulFooterLinks.edges.map((link, index) => (
						<a key={index} href={link.node.url}>{link.node.title}</a>
					))}
				</LinkGroup>
			)}
		/>
		
		<Copyright>{children}</Copyright>
	</FooterGroup>
)
