import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from '.'

import items from './mock'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-dark'
    }
  }
} as Meta

export const Default: Story<DropdownProps> = (args) => (
  <div style={{ marginLeft: '400px', marginRight: 'auto', width: '100vw' }}>
    <Dropdown {...args} />
  </div>
)

Default.args = {
  ...items
}

Default.parameters = {
  backgrounds: {
    default: 'mm-dark'
  }
}
