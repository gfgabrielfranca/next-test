export default function Home({ time, host }) {
  return (
    <div>
      <p>{time}</p>
      <p>{host}</p>
    </div>
  )
}

// export async function getServerSideProps() {
//   console.log('server: Home');

//   return {}
// }
