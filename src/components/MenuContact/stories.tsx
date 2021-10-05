import { Story, Meta } from '@storybook/react'
import MenuContact from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'menu/MenuContact',
  component: MenuContact
} as Meta

export const Default: Story = () => <MenuContact />

Default.args = {}

Default.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}

export const Mobile: Story = () => <MenuContact />

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
