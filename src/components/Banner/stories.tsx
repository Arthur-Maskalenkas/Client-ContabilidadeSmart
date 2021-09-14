import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Desktop: Story<BannerProps> = (args) => (
  <div style={{ width: '100%' }}>
    <Banner {...args} />
  </div>
)

Desktop.args = {
  img: 'img/index/Fiscal-e-Tributária-votuporanga.jpg',
  title: 'Uma contabilidade ',
  titleWithColor: 'Reinventando dinamicamente',
  subtitle:
    'Youtubers, Produtores, Coprodutores, Especialistas, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Redator, Copywriter, Designer Gráfico e Video Maker são como Profissões do Futuro.',
  buttonLabel: 'Veja mais',
  buttonLink: '',
  textDirection: 'center'
}

export const Mobile: Story<BannerProps> = (args) => (
  <div style={{ width: '100vw' }}>
    <Banner {...args} />
  </div>
)

Mobile.args = {
  img: 'img/index/Fiscal-e-Tributária-votuporanga.jpg',
  title: 'Uma contabilidade ',
  titleWithColor: 'Reinventando dinamicamente',
  subtitle:
    'Youtubers, Produtores, Coprodutores, Especialistas, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Redator, Copywriter, Designer Gráfico e Video Maker são como Profissões do Futuro.',
  buttonLabel: 'Veja mais',
  buttonLink: '',
  textDirection: 'center'
}

Mobile.parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
