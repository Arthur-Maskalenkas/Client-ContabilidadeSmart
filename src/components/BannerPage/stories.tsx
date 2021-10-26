import { Story, Meta } from '@storybook/react'
import BannerPage, { BannerPageProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from 'components/Container'

export default {
  title: 'BannerPage',
  component: BannerPage
} as Meta

export const Default: Story<BannerPageProps> = (args) => (
  <Container>
    <div
      style={{
        width: '67rem'
      }}
    >
      <BannerPage {...args} />
    </div>
  </Container>
)

Default.args = {
  backgroundImage: 'img/index/Fiscal-e-Tributária-votuporanga.jpg',
  data: '23 out 2020',
  altImage: 'uma imagem',
  slug: 'um slug'
}

export const Mobile: Story<BannerPageProps> = (args) => (
  <div
    style={{
      width: '100%',
      padding: '2rem'
    }}
  >
    <BannerPage {...args} />
  </div>
)

Mobile.args = {
  backgroundImage: 'img/index/Fiscal-e-Tributária-votuporanga.jpg',
  data: '23 out 2020',
  altImage: 'uma imagem',
  slug: 'um slug'
}

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
