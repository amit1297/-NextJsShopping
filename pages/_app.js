import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navigation from  '../common/Navigation'

function MyApp({ Component, pageProps }) {
  return <>
  <Navigation></Navigation>
  <Component {...pageProps} />
  </>;
}

export default MyApp;
