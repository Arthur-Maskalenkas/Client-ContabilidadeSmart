import { Story, Meta } from '@storybook/react'
import DropdownMobile, { DropDownMobileProps } from '.'
import items from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'DropdownMobile',
  component: DropdownMobile
} as Meta
export const Default: Story<DropDownMobileProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
    <DropdownMobile {...args}>Premium</DropdownMobile>
    <DropdownMobile {...args}>Premium</DropdownMobile>
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
