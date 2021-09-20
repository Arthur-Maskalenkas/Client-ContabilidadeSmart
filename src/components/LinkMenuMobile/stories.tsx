import { Story, Meta } from '@storybook/react'
import LinkMenuMobile, { LinkMenuMobileProps } from '.'
import items from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'LinkMenuMobile',
  component: LinkMenuMobile
} as Meta
export const Default: Story<LinkMenuMobileProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
    <LinkMenuMobile {...args}>Premium</LinkMenuMobile>
    <LinkMenuMobile {...args}>Premium</LinkMenuMobile>
  </div>
)

Default.args = {
  ...items
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
