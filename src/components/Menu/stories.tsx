import { Story, Meta } from '@storybook/react'

import BannerSlider from 'components/BannerSlider'
import mockBanner from 'components/BannerSlider/mock'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <div style={{ height: '150vh' }}>
    <Menu />
    <BannerSlider items={mockBanner} />
  </div>
)
