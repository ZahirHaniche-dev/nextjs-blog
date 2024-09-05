import React from 'react';

export default function Article({ articleEnCours }) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 my-5">
          <h1 className='text-center'>{articleEnCours.title}</h1>
          <p>{articleEnCours.body}</p>
        </div>
      </div>        
    </div>
  );
}

// Fonction pour obtenir les props statiques
export async function getStaticProps(context) {
  const { article } = context.params; // On récupère l'ID de l'article depuis les params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${article}`); // Utilise l'ID de l'article
  const articleEnCours = await res.json();

  return {
    props: {
      articleEnCours,
    },
  };
}

// Fonction pour générer les chemins dynamiques
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await res.json();

  // Générer les chemins basés sur les IDs des articles
  const paths = articles.map((article) => ({
    params: { article: article.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Si la page n'est pas trouvée, retourner une 404
  };
}
