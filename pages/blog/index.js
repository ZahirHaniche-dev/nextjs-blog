import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function index() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-12 my-5 text-center ">
            <h1>Bienvenue sur le Blog</h1>
            <p>Voici les articles</p>
          </div>
          <div className={` ${styles.tableau} col-4`}>
            <h5>Lisez les articles</h5>
            <p className="my-2">Chaque auteur tente de vous apporter...</p>
            <Link href="/blog">
                <span>Lire cet article</span>
            </Link>
          </div>
        </div>      
      </div>
  )
}
