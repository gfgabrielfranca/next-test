import Link from 'next/link'

export default function About({ time, host }) {
  return (
    <>
      <h1>About</h1>

      <p>{time}</p>
      <p>{host}</p>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  console.log('server: About');
  
  const props = { time: (new Date()).toString() };

  return { props };
}
