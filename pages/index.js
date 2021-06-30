import Countries from 'components/Countries'
import Header from 'components/Header'
import Head from 'next/head'
import { useState } from 'react'

const Home = () => {
  const [query, setquery] = useState('')

  const handleQuery = (event) => {
    setquery(event.toLowerCase())
  }

  return (
    <div className="home__container">
      <Head>
        <title>countries</title>
      </Head>
      <Header handleQuery={handleQuery} query={query} />
      <Countries query={query} />
    </div>
  )
}
export default Home
