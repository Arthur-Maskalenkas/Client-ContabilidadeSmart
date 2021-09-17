import { Story, Meta } from '@storybook/react'
import DropdownMobile, { DropdownMobileProps } from '.'
import items from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'DropdownMobile',
  component: DropdownMobile
} as Meta
export const Default: Story<DropdownMobileProps> = (args) => (
  <div style={{ display: 'flex', width: '100vw' }}>
    <DropdownMobile {...args}>Premium</DropdownMobile>
  </div>
)

Default.args = {
  title: 'Clique aqui',
  children: 'Conteudo'
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
