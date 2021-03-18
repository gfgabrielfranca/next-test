export default function Home({ time, host }) {
  return (
    <div>
      <p>{time}</p>
      <p>{host}</p>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  return { props: {
    time: (new Date()).toString(),
    host: req.headers.host
  }}
}
