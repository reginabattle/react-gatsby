import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
	display: grid;
	grid-column-gap: 25px;
	align-items: center;
	grid-template-columns: 60px auto;
`

const CellImage = styled.div` 
	background-image:url(${props => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 60px;
	height: 60px;
	border-radius: 10px;	
`

const CellTitle = styled.div`
	font-size: 1.25rem;
	padding: 1em 0;
	border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Cell = props => (
	<CellGroup>
		<CellImage image={props.image}></CellImage>
		<CellTitle>{props.title}</CellTitle>
	</CellGroup>
)

export default Cell