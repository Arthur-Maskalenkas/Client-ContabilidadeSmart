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
import {
  QueryMaisVistos,
  QueryMaisVistosVariables
} from 'graphql/generated/QueryMaisVistos'
import { QUERY_POSTS_MAIS_VISTO_BY_SLUG } from 'graphql/queries/postsMaisVistos'
import {
  MUTATION_CREATE_POSTS_MAIS_VISTO,
  MUTATION_UPDATE_POSTS_MAIS_VISTO
} from 'graphql/mutations/postsMaisVistos'
import {
  CreatePostsMaisVistos,
  CreatePostsMaisVistosVariables
} from 'graphql/generated/CreatePostsMaisVistos'
import {
  UpdatePostsMaisVistos,
  UpdatePostsMaisVistosVariables
} from 'graphql/generated/UpdatePostsMaisVistos'

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

  // MUTATION

  const {
    data: { postsMaisVistos }
  } = await apolloClient.query<QueryMaisVistos, QueryMaisVistosVariables>({
    query: QUERY_POSTS_MAIS_VISTO_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!postsMaisVistos.length) {
    await apolloClient.mutate<
      CreatePostsMaisVistos,
      CreatePostsMaisVistosVariables
    >({
      mutation: MUTATION_CREATE_POSTS_MAIS_VISTO,
      variables: { postId: data.posts[0].id, slug: data.posts[0].slug }
    })
  } else {
    await apolloClient.mutate<
      UpdatePostsMaisVistos,
      UpdatePostsMaisVistosVariables
    >({
      mutation: MUTATION_UPDATE_POSTS_MAIS_VISTO,
      variables: {
        postId: postsMaisVistos[0].id,
        visitas: postsMaisVistos[0]?.visitas + 1 || 1
      }
    })
  }

  // MUTATION

  // Retornando pagina de erro caso não encontre nada na query
  if (!data.posts.length) {
    return { notFound: true }
  }

  // Pegando os dados de post para alimentar os dados
  const post = data.posts[0]

  //  Menuaside
  const {
    data: { menuAsideMaisVistos, menuAsideMenu, menuAsideTags }
  } = await apolloClient.query<queryMenuAside>({ query: QUERY_MENUASIDE })

  const menuAsideData = { menuAsideMaisVistos, menuAsideMenu, menuAsideTags }

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
      title: post.title,
      description: post.text,
      bannerPageProps: bannerPageMapper(post),
      menuData: menuMapper(menus),
      widgets: widgetItemsPropsConstructor(widgetData),
      menuAsideItems: menuAsideItemsPropsConstructor(menuAsideData)
    }
  }
}
