import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'
import { QUERY_MENU, QUERY_MENUASIDE } from 'graphql/queries/menu'
import { QUERY_POSTS } from 'graphql/queries/posts'
import { GetServerSidePropsContext } from 'next'

import BuscarTemplate, {
  BuscarTemplateProps,
  POSTS_PER_PAGE
} from 'templates/Buscar'
import { initializeApollo } from 'utils/apollo'
import { QUERY_WIDGETS } from 'graphql/queries/widgets'
import { widgetItemsPropsConstructor } from 'utils/propsNext/widgetItems'
import { queryMenuAside } from 'graphql/generated/queryMenuAside'
import { menuAsideItemsPropsConstructor } from 'utils/propsNext/menuAsideItems'
import { menuMapper } from 'utils/mappers'
import { parseQueryStringToWhere } from 'utils/filter'

export default function BuscarPage(props: BuscarTemplateProps) {
  return <BuscarTemplate {...props} />
}

// http://localhost:3000/buscar?tags=micro-empresas
// { categories: { name_contains: 'action' } }
// where: { tags: { Title_contains: 'teste' } }

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryPosts, QueryPostsVariables>({
    query: QUERY_POSTS,
    variables: {
      limit: POSTS_PER_PAGE,
      where: parseQueryStringToWhere({ queryString: query })
    }
  })

  // Widgets
  const {
    data: { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }
  } = await apolloClient.query<QueryWidgets>({
    query: QUERY_WIDGETS
  })

  console.log(query)

  const widgetData = { widgetsCategorias, widgetsPaginas, widgetsPostsRecentes }

  //  Menuaside
  const {
    data: { menuAsideMaisVistos, menuAsideMenu, menuAsideTags }
  } = await apolloClient.query<queryMenuAside>({ query: QUERY_MENUASIDE })

  const menuAsideData = { menuAsideMaisVistos, menuAsideMenu, menuAsideTags }

  // Menu data
  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      menuData: menuMapper(menus),
      menuAsideItems: menuAsideItemsPropsConstructor(menuAsideData),
      widgets: widgetItemsPropsConstructor(widgetData)
    }
  }
}
