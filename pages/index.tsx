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
  
//   const props = { time: (new Date()).toString() };

//   return { props };
// }
