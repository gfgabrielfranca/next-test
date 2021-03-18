export default function Home({ time, host }) {
  return (
    <div>
      <p>{time}</p>
      <p>{host}</p>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=0'
  );

  return { props: {
    time: (new Date()).toString(),
    host: req.headers.host
  }}
}
