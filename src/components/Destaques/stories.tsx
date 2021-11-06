import { Story, Meta } from '@storybook/react'
import Destaques, { DestaquesProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mock from './mock'

export default {
  title: 'side/Destaques',
  component: Destaques
} as Meta

export const Default: Story<DestaquesProps> = (args) => (
  <Destaques {...args} />
)

Default.args = { items: mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<DestaquesProps> = (args) => <Destaques {...args} />

Mobile.args = { items: mock }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
