import { Story, Meta } from '@storybook/react'
import RecursosCard, { RecursosCardProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mock from './mock'

export default {
  title: 'RecursosCard',
  component: RecursosCard
} as Meta

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
