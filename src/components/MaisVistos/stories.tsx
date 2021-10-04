import { Story, Meta } from '@storybook/react'
import MaisVistos, { MaisVistosProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mock from './mock'

export default {
  title: 'side/MaisVistos',
  component: MaisVistos
} as Meta

export const Default: Story<MaisVistosProps> = (args) => <MaisVistos {...args} />

Default.args = { ...mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<MaisVistosProps> = (args) => <MaisVistos {...args} />

Mobile.args = { ...mock }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
