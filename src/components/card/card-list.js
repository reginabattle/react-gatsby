import React from 'react'
import styles from './card-list.module.css'

export default ({ children }) => (
    <section className={styles.cards}>
        <div className={styles.group}>
            {children}
        </div>
    </section>
)