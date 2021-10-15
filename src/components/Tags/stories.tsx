import { Story, Meta } from '@storybook/react'
import Tags, { TagsProps } from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'side/Tags',
  component: Tags
} as Meta

export const Default: Story<TagsProps> = (args) => (
  <div
    style={{
      width: '35rem'
    }}
  >
    <Tags {...args} />
  </div>
)

const mockWithItems = {
  items: mock
}

Default.args = {
  ...mockWithItems
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<TagsProps> = (args) => (
  <div
    style={{
      maxWidth: '35rem'
    }}
  >
    <Tags {...args} />
  </div>
)

Mobile.args = {
  ...mockWithItems
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
