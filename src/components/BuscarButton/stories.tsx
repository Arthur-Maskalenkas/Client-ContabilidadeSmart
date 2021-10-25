import { Story, Meta } from '@storybook/react'
import BuscarButton, { BuscarButtonProps } from '.'

export default {
  title: 'BuscarButton',
  component: BuscarButton
} as Meta

export const Default: Story<BuscarButtonProps> = (args) => (
  <BuscarButton {...args} />
)

Default.args = { icon: 'NavigateNext', currentPage: 1, lastPage: 2 }

export const Disabled: Story<BuscarButtonProps> = (args) => (
  <BuscarButton {...args} />
)

Disabled.args = { icon: 'NavigateNext', currentPage: 2, lastPage: 2 }
