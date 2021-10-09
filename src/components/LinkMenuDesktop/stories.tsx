import { Story, Meta } from '@storybook/react/types-6-0'
import LinkMenuDesktop, { LinkMenuDesktopProps } from '.'

import { mockWithDropdownOptions } from './mock'

export default {
  title: 'LinkMenu/LinkMenuDesktop',
  component: LinkMenuDesktop,
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
  },
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

export const WithDropdownSelected: Story<LinkMenuDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', width: '100vw' }}>
    <LinkMenuDesktop {...args} />
  </div>
)

WithDropdownSelected.args = {
  ...mockWithDropdownOptions,
  isSelected: true
}

WithDropdownSelected.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}
