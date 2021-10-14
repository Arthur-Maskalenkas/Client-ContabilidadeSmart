import { Story, Meta } from '@storybook/react'
import MaisVistos, { MaisVistosProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mock from './mock'

export default {
  title: 'side/MaisVistos',
  component: MaisVistos
} as Meta

export const Default: Story<MaisVistosProps> = (args) => <MaisVistos {...args} />

const mockWithItems =
{ items:
  [
    {
      title: 'Quais os tipos de lançamentos', slug: 'quais_os_tipos_de_lançamentos'
    },
    {
      title: 'Cansado!? 14 dicas faceis para criar o seu infoproduto',
      slug: 'cansado?!_14_dicas_faceis_para_criar_o_seu_infoproduto'
    }
  ]
}


Default.args = { ...mockWithItems }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<MaisVistosProps> = (args) => <MaisVistos {...args} />

Mobile.args = { ...mockWithItems }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
