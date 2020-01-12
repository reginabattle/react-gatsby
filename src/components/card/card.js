import React from 'react'
import styles from './card.module.css'

export default props => (
	<div className={styles.card}>
		<img src={props.image} alt="" />
		<h3>{props.title}</h3>
		<p>{props.text}</p>
	</div>
)
