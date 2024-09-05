// Assurez-vous que le fichier est nommé [user].js

import React from 'react';

export default function User({ userEnCours }) {
  console.log(userEnCours);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 my-5">
          <span>{userEnCours.name}</span> {/* Affiche le nom de l'utilisateur récupéré */}
          <p>Username : {userEnCours.username}</p> {/* Affiche le nom d'utilisateur récupéré */}
          <ul>
            <li>Email : {userEnCours.email}</li>
            <li>Phone : {userEnCours.phone}</li>
            <li>Website : {userEnCours.website}</li>
            <li>
              Address : {userEnCours.address.street}, {userEnCours.address.suite}, {userEnCours.address.city}, {userEnCours.address.zipcode}
            </li>
            <li>
              Company : {userEnCours.company.name}, {userEnCours.company.catchPhrase}, {userEnCours.company.bs}
            </li>
          </ul>
        </div>
      </div>        
    </div>
  );
}

// Fonction pour obtenir les props statiques
export async function getStaticProps(context) {
  const { user } = context.params; // On récupère l'ID de l'utilisateur depuis les params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`); // Utilise l'ID pour récupérer les données de l'utilisateur
  const userEnCours = await res.json();

  return {
    props: {
      userEnCours,
    },
  };
}

// Fonction pour générer les chemins dynamiques
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  console.log(users);
  
  // Générer les chemins basés sur les IDs des utilisateurs
  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Si la page n'est pas trouvée, retourner une 404
  };
}
