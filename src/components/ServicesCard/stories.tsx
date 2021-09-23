import { Story, Meta } from '@storybook/react'
import ServicesCard, { ServicesCardProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from 'components/Container'

export default {
  title: 'ServicesCard',
  component: ServicesCard
} as Meta

export const Default: Story<ServicesCardProps> = (args) => (
  <Container>
    <div
      style={{
        marginTop: '50px',
        display: 'grid',
        gridTemplateColumns: '1fr  1fr 1fr',
        gap: '5rem'
      }}
    >
      <ServicesCard {...args} icon="Facebook" />
      <ServicesCard {...args} icon="Instagram" />
      <ServicesCard {...args} icon="Whatsapp" />
    </div>
  </Container>
)

Default.args = {
  title: 'Infoproduto',
  description:
    'Youtubers, Produtores, Coprodutores, Especialistas / Experts, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Copywriter, Designer Gráfico e Video Maker são as Profissões do Futuro.',
  icon: 'Whatsapp'
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<ServicesCardProps> = (args) => (
  <div
    style={{
      maxWidth: '90vw',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px'
    }}
  >
    <ServicesCard {...args} />
  </div>
)

Mobile.args = {
  title: 'Infoproduto',
  description:
    'Youtubers, Produtores, Coprodutores, Especialistas / Experts, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Copywriter, Designer Gráfico e Video Maker são as Profissões do Futuro.',
  icon: 'Whatsapp'
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
