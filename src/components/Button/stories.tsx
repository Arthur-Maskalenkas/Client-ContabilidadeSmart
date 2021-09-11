import { Story, Meta } from '@storybook/react'
import { ArrowRightCircleFill } from '@styled-icons/bootstrap'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Clique aqui!'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Clique aqui!',
  icon: <ArrowRightCircleFill />
}
