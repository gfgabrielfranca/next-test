import Link from 'next/link'

export default function Home({ time, host }) {
  return (
    <>
      <h1>Home</h1>

      <p>{time}</p>
      <p>{host}</p>

      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  )
}

export async function getServerSideProps() {
  console.log('server: Home');
  
  const props = { time: (new Date()).toString() };

  return { props };
}
