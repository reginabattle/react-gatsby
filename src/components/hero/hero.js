import React from 'react'
import { Link } from 'gatsby'
import Wave from '../wave/wave'
import styles from './hero.module.css'

export default () => (
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1>Learn how to design and code React apps</h1>
            <p>Complete courses about the best tools and design systems.</p>
            <Link to="/">Watch video</Link>
        </div>

        <Wave />
    </section>
)