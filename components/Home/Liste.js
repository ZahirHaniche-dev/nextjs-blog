import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Liste() {
  return (
    <div className={styles.tableau}>
        <h5>Faites un tour vers la liste de membres</h5>
        <span className={styles.subTitle}>Faites-vous des amis</span>
        <p className="my-2">Ajoutez, invitez et discutez avec les différents membres.</p>
        <Link href="/blog">
            <span>Découvre la liste de membres</span>
        </Link>
    </div>
  )
}
