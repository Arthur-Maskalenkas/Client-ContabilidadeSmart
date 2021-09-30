import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

export default function Index(props: ArtigoTemplateProps) {
  const router = useRouter()

  // Se a rota não tiver sido gerada ainda, pode mostrar loading, uma tela de esqueleto...
  if (router.isFallback) return null

  return <Artigo {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'MEI' } }],
    fallback: true // Se não tiver sido feita em build time, ele vai gerar a pagina de erro
  }
}

export function getStaticProps() {
  return {
    props: {
      title: 'teste'
    }
  }
}
