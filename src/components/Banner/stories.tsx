import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'img/index/Pessoa-Física-votuporanga.jpg',
    title: 'Sua empresa preparada',
    subtitle: 'Venha fazer uma parceria de sucesso integrando ao novo normal',
    buttonLabel: 'Veja mais'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Desktop: Story<BannerProps> = (args) => (
  <div style={{ width: '100vw', height: '130vh' }}>
    <Banner {...args} />
  </div>
)

export const Mobile: Story<BannerProps> = (args) => (
  <div style={{ width: '100vw', height: '280px' }}>
    <Banner {...args} />
  </div>
)

Mobile.args = {
  textDirection: 'right'
}

Mobile.parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
