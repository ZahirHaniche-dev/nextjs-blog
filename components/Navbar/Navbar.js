import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/" legacyBehavior>
            <a>Accueil</a>
        </Link>
        <Link href="/blog" legacyBehavior>
            <a>Blog</a>
        </Link>
        <Link href="/liste" legacyBehavior>
            <a>Liste</a>
        </Link>
    </nav>
  )
}
