import { Story, Meta } from '@storybook/react'
import PostBuscar, { PostBuscarProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'PostBuscar',
  component: PostBuscar
} as Meta

const mock: PostBuscarProps = {
  BannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/caixa-tem-contabilidade-votuporanga.png',
    data: '15/10/2021',
    tag: 'Esportes'
  },
  title: 'Saques de FGTS e recebimento de beneficios',
  description:
    'Saques de FGTS e recebimento de benefícios decorrentes do coronavírus por meio de conta tipo poupança social digital. Por meio da Lei nº 14.020/2020 foi regulamentada a conta tipo poupança social digital a ser utilizada tanto para o recebimento de benefícios decorrentes da pandemia do coronavírus como para a movimentação das contas individuais do FGTS, nas situações permitidas'
}

export const Default: Story<PostBuscarProps> = (args) => (
  <div
    style={{
      width: '70rem'
    }}
  >
    <PostBuscar {...args} />
  </div>
)

Default.args = {
  ...mock
}

export const Mobile: Story<PostBuscarProps> = (args) => <PostBuscar {...args} />

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
