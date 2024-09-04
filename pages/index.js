import Blog from "@/components/Home/Blog";
import Liste from "@/components/Home/Liste";
import Head from "next/head";

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
            <Blog />
          </div>
          <div className="col-6">
            <Liste />
          </div>
        </div>        
      </div>
    </div>
  );
}
