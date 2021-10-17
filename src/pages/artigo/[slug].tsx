import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { maisVistosMock } from 'components/MenuAside/mock'

import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

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
import {
  menuMapper,
  widgetCategoriasMapper,
  widgetPaginasMapper,
  widgetPostsRecentesMapper
} from 'utils/mappers'
import { QUERY_WIDGETS } from 'graphql/queries/widgets'

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
    query: QUERY_WIDGETS
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
        backgroundImage: post.capa,
        data: post.created_at,
        tag: ''
      },
      menuData: menuMapper(menus),
      widgetListCategoriasData: widgetCategoriasMapper(widgetsCategorias),
      widgetListPaginasData: widgetPaginasMapper(widgetsPaginas),
      widgetPostsRecentes: widgetPostsRecentesMapper(widgetsPostsRecentes),
      // Criar um MaisVistos no db, ele vai ter 1 post e vai pegar title e slug
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
