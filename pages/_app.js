import Head from "next/head";
import "styles/globals.css";
// import "styles/utils.css";
// import "styles/home.css";
// import "styles/appbar.css";
// import "styles/header.css";
// import "styles/countries.css";
// import "styles/country.css";

const App = ({ Component, ...pageProps }) => {
  return (
    <div className="flex justify-center my-6  mx-auto">
      <Head>
        <title>countries</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};
export default App;
