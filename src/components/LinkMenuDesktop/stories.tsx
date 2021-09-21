import { Story, Meta } from '@storybook/react/types-6-0'
import LinkMenuDesktop, { LinkMenuDesktopProps } from '.'

import items from './mock'

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

export const WithDropdownNoSelect: Story<LinkMenuDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', width: '100vw' }}>
    <LinkMenuDesktop {...args} />
  </div>
)

WithDropdownNoSelect.args = {
  ...items
}

WithDropdownNoSelect.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}

export const WithDropdownSelected: Story<LinkMenuDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', width: '100vw' }}>
    <LinkMenuDesktop {...args} />
  </div>
)

WithDropdownSelected.args = {
  ...items,
  isSelected: true
}

WithDropdownSelected.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}