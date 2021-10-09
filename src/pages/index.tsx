import Home, { HomeTemplateProps } from 'templates/Home'

import mockBannerSlider from 'components/BannerSlider/mock'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      bannerSliderData: mockBannerSlider
    }
  }
}
