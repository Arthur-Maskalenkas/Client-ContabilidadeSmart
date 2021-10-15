import { Story, Meta } from '@storybook/react'
import SocialBanner, { SocialBannerProps } from '.'

export default {
  title: 'SocialBanner',
  component: SocialBanner
} as Meta

export const Default: Story<SocialBannerProps> = (args) => (
  <SocialBanner {...args} />
)

Default.args = {
  img: 'img/socialBanners/Facebook.jpg'
}
