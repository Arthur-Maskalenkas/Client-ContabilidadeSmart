import { Story, Meta } from '@storybook/react'
import MenuAside from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from 'components/Container'

export default {
  title: 'menu/MenuAside',
  component: MenuAside
} as Meta

export const Default: Story = () => (
  <Container>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 35rem' }}>
      <div></div>
      <MenuAside />
    </div>
  </Container>
)

Default.args = {}

Default.parameters = {
  backgrounds: {
    default: 'artigosBg'
  }
}

export const Mobile: Story = () => <MenuAside />

Mobile.args = {}

Mobile.parameters = {
  backgrounds: {
    default: 'artigosBg'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
