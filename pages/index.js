import Head from 'next/head'
import Header from '../components/Header';

import PlanetInfo from '../components/PlanetInfo';

export default function Home({ planets }) {
  return (
    <div className="">
      <Head>
        <title>Solar System | Mercury</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header planets={planets} />

      <PlanetInfo planet={planets[0]} />


    </div>
  )
};

export async function getStaticProps() {
  const planets = await fetch('https://jsonkeeper.com/b/RVBJ').then(res => res.json())

  return {
    props: {
      planets
    },
  }
}