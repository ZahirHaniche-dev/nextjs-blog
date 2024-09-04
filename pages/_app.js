import Container from "@/components/Container/Container";
import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
