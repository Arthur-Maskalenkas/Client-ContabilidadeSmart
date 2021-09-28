import { Story, Meta } from '@storybook/react'
import RecursosCard, { RecursosCardProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mock from './mock'

export default {
  title: 'Cards/RecursosCard',
  component: RecursosCard
} as Meta

export const Default: Story<RecursosCardProps> = (args) => (
  <div style={{ width: '38rem' }}>
    <RecursosCard {...args} />
  </div>
)

Default.args = {
  ...mock
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<RecursosCardProps> = (args) => (
  <div style={{ padding: '1.5rem' }}>
    <RecursosCard {...args} />
  </div>
)

Mobile.args = {
  ...mock
}

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
