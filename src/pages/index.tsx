import Home, { HomeTemplateProps } from 'templates/Home'


import { initializeApollo } from 'utils/apollo'

import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'


import { QueryBannersHome } from 'graphql/generated/QueryBannersHome'
import { QUERY_HOME_BANNERS } from 'graphql/queries/home'
import { QueryWidgets } from 'graphql/generated/QueryWidgets'

import { QUERY_WIDGETS_POSTS_PAGINAS_CATEGORIAS } from 'graphql/queries/widgets'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  // Banner no topo
  const { data : { home }} = await apolloClient.query<QueryBannersHome>({query: QUERY_HOME_BANNERS})

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
      revalidate: 120,
      widgetListCategoriasData: widgetsCategorias.map((item) => ({
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
      menuData:
         menus.map((item) => ({
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
