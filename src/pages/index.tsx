import Home, { HomeTemplateProps } from 'templates/Home'

import mockGallery from 'components/Gallery/mock'

export default function sobre(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      gallery: { items: mockGallery }
    }
  }
}
