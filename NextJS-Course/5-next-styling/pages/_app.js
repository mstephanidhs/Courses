import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
