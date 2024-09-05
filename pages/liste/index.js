import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function index(props) {

  console.log(props);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5 text-center">
          <h1>La Liste des Utilisateurs</h1>
        </div>
        <div className="row g-4">
          { props.results.map((user, index) => {
              return (
                <div className={` ${styles.tableau} col-12 mx-auto d-flex justify-content-between`} key={index}>
                  <span className={styles.subTitle}>{user.name}</span>
                  <span>
                    <Link href={`/liste/${user.id}`}>
                      <span>Contacter</span>
                    </Link>
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>      
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context);

  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const results = await data.json();
  return {
      props: {
        results
      }
  }
}