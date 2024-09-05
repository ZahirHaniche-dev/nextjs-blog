import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function index(props) {

  console.log(props);

  // Fonction pour tronquer le texte
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // Tronque et ajoute "..."
    }
    return text; // Si le texte est plus court, ne rien faire
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5 text-center">
          <h1>Bienvenue sur le Blog</h1>
          <p>Voici les articles</p>
        </div>
      </div>

      <div className="row g-4">
        {props.results.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item.id}>
            <div className={styles.tableau} >
              <h5>{truncateText(item.title, 35)}</h5>
              {/* Utilisation de truncateText pour limiter le nombre de caractères */}
              <p className="my-2">{truncateText(item.body, 20)}</p>
              <Link href={`/blog/${item.id}`}>
                <span>Lire cet article</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);

  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const results = await data.json();
  return {
      props: {
        results
      }
  }
}