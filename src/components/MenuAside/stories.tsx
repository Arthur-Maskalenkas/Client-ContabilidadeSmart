import { Story, Meta } from '@storybook/react'
import MenuAside, { MenuAsideProps } from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from 'components/Container'

export default {
  title: 'side/MenuAside',
  component: MenuAside
} as Meta

export const Default: Story<MenuAsideProps> = (args) => (
  <div style={{ width: '35rem' }}>
    <MenuAside {...args} />
  </div>
)

Default.args = { ...mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<MenuAsideProps> = (args) => <MenuAside {...args} />

Mobile.args = { ...mock }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
