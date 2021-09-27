import { Story, Meta } from '@storybook/react'
import SocialBannerSlides, { SocialBannerSlidesProps } from '.'

import items from './mock'

export default {
  title: 'Slides/SocialBannerSlides',
  component: SocialBannerSlides
} as Meta

export const Default: Story<SocialBannerSlidesProps> = (args) => (
  <div style={{ width: '90rem', marginLeft: 'auto', marginRight: 'auto' }}>
    <SocialBannerSlides {...args} />
  </div>
)

Default.args = {
  items
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

Default.argTypes = {
  items: {
    control: false
  }
}
