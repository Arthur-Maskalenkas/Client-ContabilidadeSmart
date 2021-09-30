import { Story, Meta } from '@storybook/react'
import MenuAside, { MenuAsideProps } from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'MenuAside',
  component: MenuAside
} as Meta

export const Default: Story<MenuAsideProps> = (args) => <MenuAside {...args} />

Default.args = { ...mock }

export const Mobile: Story<MenuAsideProps> = (args) => <MenuAside {...args} />

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
