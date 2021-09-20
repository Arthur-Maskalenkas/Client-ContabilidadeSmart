import { Story, Meta } from '@storybook/react/types-6-0'
import LinkMenuDesktop, { LinkMenuDesktopProps } from '.'

import items from './mock'

export default {
  title: 'LinkMenu/LinkMenuDesktop',
  component: LinkMenuDesktop,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-dark'
    }
  }
} as Meta

export const Default: Story<LinkMenuDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', width: '100vw' }}>
    <LinkMenuDesktop {...args} />
  </div>
)

Default.args = {
  title: 'Premium'
}

export const WithDropdown: Story<LinkMenuDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', width: '100vw' }}>
    <LinkMenuDesktop {...args} />
  </div>
)

WithDropdown.args = {
  ...items
}

WithDropdown.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}
