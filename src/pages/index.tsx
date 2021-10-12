import Home, { HomeTemplateProps } from 'templates/Home'

import mockBannerSlider from 'components/BannerSlider/mock'
import mockMenu from 'components/Menu/mock'
import mockWidgetList from 'components/WidgetList/mock'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      bannerSliderData: mockBannerSlider,
      widgetListData: mockWidgetList,
      menuData: mockMenu
    }
  }
}
