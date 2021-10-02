import { Story, Meta } from '@storybook/react'
import Tags, { TagsProps } from '.'

import mock from './mock'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from 'components/Container'

export default {
  title: 'side/Tags',
  component: Tags
} as Meta

export const Default: Story<TagsProps> = (args) => (
  <div style={{ width: '35rem' }}>
    <Tags {...args} />
  </div>
)

Default.args = { ...mock }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<TagsProps> = (args) => (
  <div style={{ maxWidth: '35rem' }}>
    <Tags {...args} />
  </div>
)

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
