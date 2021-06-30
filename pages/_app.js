import Appbar from 'components/Appbar'
import 'styles/globals.css'
import 'styles/utils.css'
import 'styles/home.css'
import 'styles/appbar.css'
import 'styles/header.css'
import 'styles/countries.css'
import 'styles/country.css'

const App = ({ Component, ...pageProps }) => {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  )
}
export default App
