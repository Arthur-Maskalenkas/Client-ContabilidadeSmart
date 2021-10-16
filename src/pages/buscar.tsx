import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'
import { QUERY_MENU } from 'graphql/queries/menu'
import { QUERY_POSTS } from 'graphql/queries/posts'
import { QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS } from 'graphql/queries/widgets'
import { GetServerSidePropsContext } from 'next'

import BuscarTemplate, { BuscarTemplateProps } from 'templates/Buscar'
import { initializeApollo } from 'utils/apollo'

export default function BuscarPage(props: BuscarTemplateProps) {
  return <BuscarTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryPosts, QueryPostsVariables>({
    query: QUERY_POSTS,
    variables: { limit: 3, where: { tags: { Title_contains: 'teste' } } }
  })

  // Widgets
  const {
    data: { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }
  } = await apolloClient.query<QueryWidgets>({
    query: QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS
  })

  // Menu data
  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
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
      ]
    }
  }
}
