import { Story, Meta } from '@storybook/react'
import NavigationAside from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { MenuProps } from 'components/Menu'

export default {
  title: 'side/NavigationAside',
  component: NavigationAside
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div
    style={{
      width: '35rem'
    }}
  >
    <NavigationAside {...args} />
  </div>
)

Default.args = { ...mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<MenuProps> = (args) => <NavigationAside {...args} />

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
