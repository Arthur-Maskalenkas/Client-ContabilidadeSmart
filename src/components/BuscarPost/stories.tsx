import { Story, Meta } from '@storybook/react'
import BuscarPost, { BuscarPostProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'BuscarPost',
  component: BuscarPost
} as Meta

const mock: BuscarPostProps = {
  BannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/caixa-tem-contabilidade-votuporanga.png',
    data: '15/10/2021',
    tag: 'Esportes',
    altImage: 'Uma imagem'
  },
  title: 'Saques de FGTS e recebimento de beneficios',
  subtitle: `Isso daqui é uma demonstração de texto que pode aparecer no post. O limite é 235 caracteers e é gerido pelo próprio banco de dados, ou seja, não tem como burlar isso ja que tem um limite!!! eu não sei mais o que falar para completar
    `
}

export const Default: Story<BuscarPostProps> = (args) => (
  <div
    style={{
      maxWidth: '70rem'
    }}
  >
    <BuscarPost {...args} />
  </div>
)

Default.args = {
  ...mock
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<BuscarPostProps> = (args) => (
  <div style={{ width: '31rem', marginLeft: 'auto', marginRight: 'auto' }}>
    <BuscarPost {...args} />
  </div>
)

Mobile.args = {
  ...mock
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
