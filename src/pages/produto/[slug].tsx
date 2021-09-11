import Produto, { ProdutoTemplateProps } from 'templates/Produto'

export default function Index(props: ProdutoTemplateProps) {
  return <Produto {...props} />
}

// como é estatico, precisa gerar em build time as rotas
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'Ferrari' } }],
    fallback: false // Se não tiver sido feita em build time, ele vai gerar a pagina de erro
  }
}

export function getStaticProps() {
  return {
    props: {}
  }
}
