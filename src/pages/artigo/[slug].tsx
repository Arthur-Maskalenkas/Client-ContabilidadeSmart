import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { maisVistosMock, tagsMock, navigationMock } from 'components/MenuAside/mock'


import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

import { QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS } from 'graphql/queries/widgets'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'

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

const texto = `<body contenteditable="true" class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" spellcheck="false"><address><p>Hoje em dia é possível aumentar a renda com produtos de venda direta além dos perfumes, cosméticos e produtos de alimentação? Sim.</p><p>Se antes você tinha que andar com uma mochila cargueira cheia de produtos e vender porta-a-porta agora é Net-a-net.</p><p>Hoje no Brasil e no mundo com o novo normal, estamos acompanhando a crescente profissionalização do mercado de venda direta, as grandes empresas brasileiras já estão atuando como multinacionais ou em início de expansão, esse passo foi dado ainda na década de 70 no mercado norte americano.</p><p>Veja os próximos passos no mercado brasileiro que sem dúvida vamos ter nos próximos anos com o novo normal:</p><ol><li>Uso da Internet tanto na venda direta, como prospecção de novos consumidores;</li><li>Novos produtos e linhas diferentes das tradicionais;</li><li>A procura de novas ferramentas e treinamentos online;</li></ol><p>Milhares de leitores tem ideia da importância crescente da internet, utilizando celulares smartphones das marcas Xiaomi, Iphone e Samsung como ferramenta e não um fim, seja para aprendizado ou para localizar e expandir novas listas de prospects.</p><p><br></p><p><strong>Veja a baixo anúncios da Avon nas décadas de 1940 e 1950</strong></p><p><span tabindex="-1" contenteditable="false" data-cke-widget-wrapper="1" data-cke-filter="off" class="cke_widget_wrapper cke_widget_inline cke_image_nocaption" data-cke-display-name="Imagem" data-ck`

export async function getStaticProps() {
  const apolloClient = initializeApollo()

    // Widgets
    const { data : { widgetsCategorias,widgetsPaginas,widgetsPostsRecentes }} = await apolloClient.query<QueryWidgets>({query: QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS, fetchPolicy: 'no-cache'})

    // Menu data
    const {
      data: { menus }
    } = await apolloClient.query<QueryMenu>({
      query: QUERY_MENU,
    })

  return {
    props: {
      title: 'Será que vale a pena ser MEI',
      menuData: {
        items: menus.map((item) => ({
          title: item.title,
          slug: item.slug,
          dropdownOptions: item.menu_options.map((item) => ({
            titleOption: item.title,
            slug: item?.post?.slug
          }))
        }))
      },
      bannerPageProps: {
        backgroundImage:
          'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
        data: '23 out 2020',
        tag: ''
      },
      description: texto,
      widgetListCategoriasData: widgetsCategorias.map((item) => ({
        title: item.title,
        path: item.path,
        items: item.categorias.map((items) => ({
          title: items.title,
          slug: items.slug
        }))
      })),
      widgetListPaginasData: widgetsPaginas.map((item) => ({
        title: item.title,
        path: item.path,
        items: item.posts.map((items) => ({
          title: items.title,
          slug: items.slug
        }))
      })),
      widgetPostsRecentes: [{
        moreWeight: true,
        title: 'Posts recentes',
        path: 'posts_recentes',
        items: widgetsPostsRecentes.map((item) => ({
          title: item.title,
          slug: item.slug
        }))}
      ],
      menuAsideItems: {
        menuData: navigationMock,
        maisVistosData: maisVistosMock,
        tagsData: tagsMock
      }
    }
  }
}
