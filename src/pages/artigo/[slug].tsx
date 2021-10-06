import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { mockCategorias, mockPaginas, mockPostsRecentes } from 'components/Widget/mock'

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
      title: 'Será que vale a pena ser MEI',
      bannerPageProps: {
        backgroundImage:
          'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
        data: '23 out 2020',
        tag: 'Noticias'
      },
      widgetCategorias: mockCategorias,
      widgetPaginas: mockPaginas,
      widgetPostsRecentes: mockPostsRecentes
    }
  }
}
