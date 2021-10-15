import { Story, Meta } from '@storybook/react'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import BannerSlider from 'components/BannerSlider'
import mockBanner from 'components/BannerSlider/mock'

import Menu, { MenuProps } from '.'

import mock from './mock'

export default {
  title: 'menu/Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div
    style={{
      height: '150vh'
    }}
  >
    <Menu {...args} />
    <BannerSlider items={mockBanner} />
  </div>
)

Default.args = {
  ...mock
}

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}

Mobile.args = {
  ...mock
}
