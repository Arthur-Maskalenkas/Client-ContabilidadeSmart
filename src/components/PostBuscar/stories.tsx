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
    `<p>Saques de FGTS e recebimento de benef&iacute;cios decorrentes do coronav&iacute;rus por meio de conta tipo poupan&ccedil;a social digital.&nbsp;Por meio da Lei n&ordm; 14.020/2020 foi regulamentada a conta tipo poupan&ccedil;a social digital a ser utilizada tanto para o recebimento de benef&iacute;cios decorrentes da pandemia do coronav&iacute;rus como para a movimenta&ccedil;&atilde;o das contas individuais do FGTS, nas situa&ccedil;&otilde;es permitidas.</p>

    <p>&nbsp;</p>

    <p>Entre as novas disposi&ccedil;&otilde;es foi estabelecido que a mencionada conta poder&aacute; ser aberta de forma autom&aacute;tica para o pagamento, entre outros, dos seguintes benef&iacute;cios:</p>

    <p>&nbsp;</p>

    <h3>Para o aux&iacute;lio emergencial</h3>

    <p>Do aux&iacute;lio emergencial previsto no &sect; 9&ordm; do art. 2&ordm; da Lei n&ordm; 13.982/2020 , devido ao MEI, ao contribuinte individual e ao trabalhador informal que atendam aos requisitos exigidos;</p>

    <p>&nbsp;</p>

    <h2>Para preserva&ccedil;&atilde;o do emprego</h2>

    <p>Do benef&iacute;cio emergencial de preserva&ccedil;&atilde;o do emprego e da renda e do benef&iacute;cio emergencial mensal pagos em decorr&ecirc;ncia da pandemia do coronav&iacute;rus, conforme previsto nos arts 5&ordm; e 18 da Lei n&ordm; 14.020/2020;</p>

    <address>&nbsp;</address>
    `
}

export const Default: Story<PostBuscarProps> = (args) => (
  <div
    style={{
      maxWidth: '70rem'
    }}
  >
    <PostBuscar {...args} />
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

export const Mobile: Story<PostBuscarProps> = (args) =>
  <div style={{width: '31rem', marginLeft: 'auto', marginRight: 'auto'}}>
    <PostBuscar {...args} />
  </div>

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
