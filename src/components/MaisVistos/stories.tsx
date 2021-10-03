import { Story, Meta } from '@storybook/react'
import MaisVistos from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'side/MaisVistos',
  component: MaisVistos
} as Meta

export const Default: Story = () => <MaisVistos />

Default.args = {}

export const Mobile: Story = () => <MaisVistos />

Mobile.args = {}

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
