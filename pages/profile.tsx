import Link from 'next/link'

export default function Profile({ time, host }) {
  return (
    <>
      <h1>Profile</h1>

      <p>{time}</p>
      <p>{host}</p>

      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  console.log('server: Profile');
  
  const props = { time: (new Date()).toString() };

  return { props };
}
