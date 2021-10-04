import { Story, Meta } from '@storybook/react'
import HeadingPage, { HeadingPageProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'HeadingPage',
  component: HeadingPage
} as Meta

export const Default: Story<HeadingPageProps> = (args) => <HeadingPage {...args} />

Default.args = { title: 'Saques de FGTS e recebimento de benefício' }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<HeadingPageProps> = (args) => <HeadingPage {...args} />

Mobile.args = { title: 'Saques de FGTS e recebimento de benefício' }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
