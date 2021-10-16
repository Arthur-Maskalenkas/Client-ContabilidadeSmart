import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { maisVistosMock } from 'components/MenuAside/mock'

import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

import { QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS } from 'graphql/queries/widgets'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'
import { QueryTags } from 'graphql/generated/QueryTags'

import { QUERY_MENUASIDE } from 'graphql/queries/menuAside'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'
import { QUERY_POSTS, QUERY_POSTS_BY_SLUG } from 'graphql/queries/posts'

import { GetStaticProps } from 'next'
import {
  queryPostsBySlug,
  queryPostsBySlugVariables
} from 'graphql/generated/queryPostsBySlug'

// Inicializando por fora para usar no get e no server
const apolloClient = initializeApollo()

export default function Index(props: ArtigoTemplateProps) {
  const router = useRouter()

  // Se a rota não tiver sido gerada ainda, pode mostrar loading, uma tela de esqueleto...
  if (router.isFallback) return null

  return <Artigo {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryPosts, QueryPostsVariables>({
    query: QUERY_POSTS,
    variables: { limit: 9 }
  })

  const paths = data.posts.map(({ slug }) => ({
    params: { slug }
  }))

  // Caso a pagina não exista, ele vai correr atras (fallback)
  return { paths, fallback: true }
}

const texto = `<body contenteditable="true" class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" spellcheck="false"><address><p>Hoje em dia é possível aumentar a renda com produtos de venda direta além dos perfumes, cosméticos e produtos de alimentação? Sim.</p><p>Se antes você tinha que andar com uma mochila cargueira cheia de produtos e vender porta-a-porta agora é Net-a-net.</p><p>Hoje no Brasil e no mundo com o novo normal, estamos acompanhando a crescente profissionalização do mercado de venda direta, as grandes empresas brasileiras já estão atuando como multinacionais ou em início de expansão, esse passo foi dado ainda na década de 70 no mercado norte americano.</p><p>Veja os próximos passos no mercado brasileiro que sem dúvida vamos ter nos próximos anos com o novo normal:</p><ol><li>Uso da Internet tanto na venda direta, como prospecção de novos consumidores;</li><li>Novos produtos e linhas diferentes das tradicionais;</li><li>A procura de novas ferramentas e treinamentos online;</li></ol><p>Milhares de leitores tem ideia da importância crescente da internet, utilizando celulares smartphones das marcas Xiaomi, Iphone e Samsung como ferramenta e não um fim, seja para aprendizado ou para localizar e expandir novas listas de prospects.</p><p><br></p><p><strong>Veja a baixo anúncios da Avon nas décadas de 1940 e 1950</strong></p><p><span tabindex="-1" contenteditable="false" data-cke-widget-wrapper="1" data-cke-filter="off" class="cke_widget_wrapper cke_widget_inline cke_image_nocaption" data-cke-display-name="Imagem" data-ck`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    queryPostsBySlug,
    queryPostsBySlugVariables
  >({
    query: QUERY_POSTS_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  // Retornando pagina de erro caso não encontre nada na query
  if (!data.posts.length) {
    return { notFound: true }
  }

  // Pegando os dados de post para alimentar os dados
  const post = data.posts[0]

  //  Menuaside
  const {
    data: { tags }
  } = await apolloClient.query<QueryTags>({ query: QUERY_MENUASIDE })

  // Widgets
  const {
    data: { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }
  } = await apolloClient.query<QueryWidgets>({
    query: QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS,
    fetchPolicy: 'no-cache'
  })

  // Menu data
  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU
  })

  // PEgar a data em que o post foi criado
  // retirar a imagem caso não tenha imagem ou substituir por algo
  return {
    props: {
      title: post.title,
      description: post.text,
      bannerPageProps: {
        backgroundImage: post.capa?.url,
        data: post.created_at,
        tag: '',
        altImage: post.capa?.alternativeText
      },
      menuData: menus.map((item) => ({
        title: item.title,
        slug: item.slug,
        dropdownOptions: item.menu_options.map((item) => ({
          titleOption: item.title,
          slug: item?.post?.slug
        }))
      })),
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
      widgetPostsRecentes: [
        {
          moreWeight: true,
          title: 'Posts recentes',
          path: 'posts_recentes',
          items: widgetsPostsRecentes.map((item) => ({
            title: item.title,
            slug: item.slug
          }))
        }
      ],
      menuAsideItems: {
        menuData: menus.map((item) => ({
          title: item.title,
          slug: item.slug,
          dropdownOptions: item.menu_options.map((item) => ({
            titleOption: item.title,
            slug: item?.post?.slug
          }))
        })),
        maisVistosData: maisVistosMock,
        tagsData: tags.map((item) => ({
          title: item.Title,
          slug: item.slug
        }))
      }
    }
  }
}
