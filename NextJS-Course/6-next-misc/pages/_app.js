import Head from "next/head";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../styles/globals.css";
import "../styles/layout.css";

// If Head is used in _app.js does not have to be used in all the others pages too

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome Youtube Channel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
