import { Story, Meta } from '@storybook/react'
import WidgetList, { WidgetListProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import mockWidgets from './mock'

export default {
  title: 'WidgetList',
  component: WidgetList
} as Meta

export const Default: Story<WidgetListProps> = (args) => (
  <WidgetList {...args} />
)

Default.args = {
  ...mockWidgets
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<WidgetListProps> = (args) => <WidgetList {...args} />

Mobile.args = {
  ...mockWidgets
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
