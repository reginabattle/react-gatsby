import React from 'react'
import './card.css'

export default props => (
	<div className="card">
		<img src={props.image} alt="" />
		<h3>{props.title}</h3>
		<p>{props.text}</p>
	</div>
)
