import Home from 'templates/Home'

export default function sobre() {
  return <Home />
}

export function getStaticProps() {
  return {
    props: {
      ola: 'dsadsa'
    }
  }
}
