import { Story, Meta } from '@storybook/react'
import LinkMenuMobile, { LinkMenuMobileProps } from '.'
import items from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'LinkMenu/LinkMenuMobile',
  component: LinkMenuMobile,
  argTypes: {
    LinkMenuDesktopOptions: {
      control: false
    },
    dropdownOptions: {
      control: false
    },
    titleLink: {
      control: false
    }
  }
} as Meta

export const Default: Story<LinkMenuMobileProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
    <LinkMenuMobile title="Produtos">Premium</LinkMenuMobile>
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}

export const WithDropdown: Story<LinkMenuMobileProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
    <LinkMenuMobile {...args}>Premium</LinkMenuMobile>
    <LinkMenuMobile {...args}>Premium</LinkMenuMobile>
  </div>
)

WithDropdown.args = {
  ...items
}

WithDropdown.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
