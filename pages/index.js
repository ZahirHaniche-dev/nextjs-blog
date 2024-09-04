import "../styles/Home.module.css"
import styles from "../styles/Home.module.css"
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12 my-5">
            <h1>Bienvenue sur Code.io</h1>
            <p>Le blog communautaire des afficionados de développement web crée par Zahir Haniche.</p>
          </div>
          <div className="col-6">
            <div className={styles.tableau}>
              <h5>Lisez les articles</h5>
              <span className={styles.subTitle}>Maximisez votre culture web</span>
              <p className="my-2">Chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
              <Link href="/blog">
                <span>Visite du blog</span>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className={styles.tableau}>
                <h5>Faites un tour vers la liste de membres</h5>
                <span className={styles.subTitle}>Faites-vous des amis</span>
                <p className="my-2">Ajoutez, invitez et discutez avec les différents membres.</p>
                <Link href="/blog">
                  <span>Découvre la liste de membres</span>
                </Link>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}
