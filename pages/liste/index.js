import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5 text-center">
          <h1>La Liste des Utilisateurs</h1>
        </div>
        {/* Utilisation de mx-auto pour centrer le bloc et d-flex pour espacer les éléments */}
        <div className={` ${styles.tableau} col-6 mx-auto d-flex justify-content-between`}>
          <span>Zahir</span>
          <span>
            <Link href="/contact">
              <span>Contacter</span>
            </Link>
          </span>
        </div>
      </div>      
    </div>
  )
}

// https://jsonplaceholder.typicode.com/users