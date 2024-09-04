import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Blog() {
  return (
    <div className={styles.tableau}>
        <h5>Lisez les articles</h5>
        <span className={styles.subTitle}>Maximisez votre culture web</span>
        <p className="my-2">Chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
        <Link href="/blog">
            <span>Visite du blog</span>
        </Link>
    </div>
  )
}
