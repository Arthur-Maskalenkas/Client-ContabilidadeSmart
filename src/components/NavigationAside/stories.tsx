import { Story, Meta } from '@storybook/react'
import NavigationAside, { NavigationAsideProps } from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'side/NavigationAside',
  component: NavigationAside
} as Meta

export const Default: Story<NavigationAsideProps> = (args) => (
  <div style={{ width: '35rem' }}>
    <NavigationAside {...args} />
  </div>
)

Default.args = { ...mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<NavigationAsideProps> = (args) => <NavigationAside {...args} />

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
