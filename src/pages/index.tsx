import Home, { HomeTemplateProps } from 'templates/Home'

import mockBannerSlider from 'components/BannerSlider/mock'
import mockWidgetList from 'components/WidgetList/mock'

import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

import { QUERY_WIDGETS_CATEGORIAS, QUERY_WIDGETS_PAGINAS, QUERY_WIDGETS_POSTS_RECENTES } from 'graphql/queries/widgets'
import { QueryWidgetsCategorias } from 'graphql/generated/QueryWidgetsCategorias'
import { QueryWidgetsPaginas } from 'graphql/generated/QueryWidgetsPaginas'
import { QueryWidgetsPostsRecentes } from 'graphql/generated/QueryWidgetsPostsRecentes'

import { QueryBannersHome } from 'graphql/generated/QueryBannersHome'
import { QUERY_HOME_BANNERS } from 'graphql/queries/home'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  // Banner no topo
  const { data : { home }} = await apolloClient.query<QueryBannersHome>({query: QUERY_HOME_BANNERS})

  // Widget POSTS RECENTES
  const { data : { postsRecentes }} = await apolloClient.query<QueryWidgetsPostsRecentes>({query: QUERY_WIDGETS_POSTS_RECENTES, fetchPolicy: 'no-cache'})

  // Widget PAGINAS
  const { data : { widgetpaginas }} = await apolloClient.query<QueryWidgetsPaginas>({query: QUERY_WIDGETS_PAGINAS, fetchPolicy: 'no-cache'})

  // Widget CATEGORIAS
  const { data : { widgetCategorias }} = await apolloClient.query<QueryWidgetsCategorias>({query: QUERY_WIDGETS_CATEGORIAS, fetchPolicy: 'no-cache'})

  // Menu data
  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU,
  })

  return {
    props: {
      revalidate: 120,
      widgetListCategoriasData: widgetCategorias.map((item) => ({
        title: item.title,
        path: item.path,
        items: item.categorias.map((items) => ({
          title: items.title,
          slug: items.slug
        }))
      })),
      bannerSliderData: home?.bannerHome?.map((items) => ({
        title: items?.title,
        subtitle: items?.subtitle,
        textDirection: items?.textDirection,
        titleWithColor: items?.titleWithColor,
        img: items?.img?.url,
        titleImage: items?.img?.alternativeText,
        buttonLabel: items?.buttonLabel,
        buttonLink: items?.buttonLink,

      })),
      widgetListPaginasData: widgetpaginas.map((item) => ({
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
        items: postsRecentes.map((item) => ({
          title: item.title,
          slug: item.slug
        }))}
      ],
      menuData: {
        items: menus.map((item) => ({
          title: item.title,
          slug: item.slug,
          dropdownOptions: item.menu_options.map((item) => ({
            titleOption: item.title,
            slug: item?.post?.slug
          }))
        }))
      }
    }
  }
}
