import Home, { HomeTemplateProps } from 'templates/Home'

import {
  bannerSliderMapper,
  menuMapper,
  widgetCategoriasMapper,
  widgetPaginasMapper,
  widgetPostsRecentesMapper
} from 'utils/mappers'

import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

import { QueryBannersHome } from 'graphql/generated/QueryBannersHome'
import { QUERY_HOME_BANNERS } from 'graphql/queries/home'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'
import { QUERY_WIDGETS } from 'graphql/queries/widgets'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  // Banner no topo
  const {
    data: { home }
  } = await apolloClient.query<QueryBannersHome>({
    query: QUERY_HOME_BANNERS
  })

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

  return {
    props: {
      revalidate: 120,
      menuData: menuMapper(menus),
      widgetListCategoriasData: widgetCategoriasMapper(widgetsCategorias),
      widgetListPaginasData: widgetPaginasMapper(widgetsPaginas),
      widgetPostsRecentes: widgetPostsRecentesMapper(widgetsPostsRecentes),
      bannerSliderData: bannerSliderMapper(home?.bannerHome)
    }
  }
}
