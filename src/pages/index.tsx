import Home, { HomeTemplateProps } from 'templates/Home'

import mockBannerSlider from 'components/BannerSlider/mock'
import mockWidgetList from 'components/WidgetList/mock'

import { initializeApollo } from 'utils/apollo'
import { QueryMenu } from 'graphql/generated/QueryMenu'
import { QUERY_MENU } from 'graphql/queries/menu'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { menus }
  } = await apolloClient.query<QueryMenu>({
    query: QUERY_MENU,
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      bannerSliderData: mockBannerSlider,
      widgetListData: mockWidgetList,
      menuData: {
        items: menus.map((item) => ({
          title: item.title,
          slug: item.slug,
          dropdownOptions: item.menu_options.map((item) => ({
            titleOption: item.title,
            slug: item.slug
          }))
        }))
      }
    }
  }
}
