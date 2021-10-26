import { Story, Meta } from '@storybook/react'
import BuscarPostLoading, { BuscarPostLoadingProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'BuscarPostLoading',
  component: BuscarPostLoading
} as Meta

export const Default: Story<BuscarPostLoadingProps> = (args) => (
  <div style={{ width: '67rem' }}>
    <BuscarPostLoading {...args} />
  </div>
)

Default.args = { items: 3 }

export const Mobile: Story<BuscarPostLoadingProps> = (args) => (
  <div
    style={{
      width: '100%',
      padding: '2rem'
    }}
  >
    <BuscarPostLoading {...args} />
  </div>
)

Mobile.args = { items: 3 }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
