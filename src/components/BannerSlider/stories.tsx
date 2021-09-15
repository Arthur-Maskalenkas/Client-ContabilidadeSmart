import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'Slides/BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{}}>
    <BannerSlider {...args} />
  </div>
)

Default.args = {
  items
}

Default.argTypes = {
  items: {
    control: false
  }
}
