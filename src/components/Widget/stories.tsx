import { Story, Meta } from '@storybook/react'
import Widget, { WidgetProps } from '.'

import { mockCategorias } from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Widget',
  component: Widget
} as Meta

export const Default: Story<WidgetProps> = (args) => <Widget {...args} />

Default.args = { ...mockCategorias }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<WidgetProps> = (args) => <Widget {...args} />

Mobile.args = { ...mockCategorias }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
