import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  size: 'small'
}

export const Mobile: Story<LogoProps> = (args) => <Logo {...args} />

Mobile.args = { size: 'small' }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
