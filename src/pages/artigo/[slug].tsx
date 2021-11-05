import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

import { QueryWidgets } from 'graphql/generated/QueryWidgets'

import { QUERY_MENUASIDE } from 'graphql/queries/menu'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'
import { QUERY_POSTS, QUERY_POSTS_BY_SLUG } from 'graphql/queries/posts'

import { GetStaticProps } from 'next'
import {
  queryPostsBySlug,
  queryPostsBySlugVariables
} from 'graphql/generated/queryPostsBySlug'
import { bannerPageMapper, menuMapper } from 'utils/mappers'
import { QUERY_WIDGETS } from 'graphql/queries/widgets'
import { queryMenuAside } from 'graphql/generated/queryMenuAside'
import { menuAsideItemsPropsConstructor } from 'utils/propsNext/menuAsideItems'
import { widgetItemsPropsConstructor } from 'utils/propsNext/widgetItems'

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
    data: {
      menuAsideMaisVistos,
      menuAsideMenu,
      menuAsideTags,
      menuAsideDestaques
    }
  } = await apolloClient.query<queryMenuAside>({ query: QUERY_MENUASIDE })

  const menuAsideData = {
    menuAsideMaisVistos,
    menuAsideMenu,
    menuAsideTags,
    menuAsideDestaques
  }

  // Widgets
  const {
    data: { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }
  } = await apolloClient.query<QueryWidgets>({
    query: QUERY_WIDGETS
  })

  const widgetData = { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }

  // Menu data
  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU
  })

  return {
    props: {
      slug: params?.slug,
      subtitulo: post.subtitulo,
      title: post.title,
      description: post.text,
      bannerPageProps: bannerPageMapper(post),
      menuData: menuMapper(menus),
      widgets: widgetItemsPropsConstructor(widgetData),
      menuAsideItems: menuAsideItemsPropsConstructor(menuAsideData)
    }
  }
}
