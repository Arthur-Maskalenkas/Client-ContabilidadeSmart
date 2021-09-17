import { Story, Meta } from '@storybook/react'
import DropdownDesktop, { DropDownDesktopProps } from '.'
import items from './mock'

export default {
  title: 'DropdownDesktop',
  component: DropdownDesktop
} as Meta

export const Default: Story<DropDownDesktopProps> = (args) => (
  <div style={{ marginLeft: '400px', marginRight: 'auto', width: '100vw' }}>
    <DropdownDesktop {...args}>Premium</DropdownDesktop>
  </div>
)

Default.args = { ...items }
