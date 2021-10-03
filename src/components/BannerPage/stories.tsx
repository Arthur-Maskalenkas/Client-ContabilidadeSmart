import { Story, Meta } from '@storybook/react'
import BannerPage from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'BannerPage',
  component: BannerPage
} as Meta

export const Default: Story = () => <BannerPage />

/*
Default.args = {

}
*/

/*
export const Mobile: Story = () => <BannerPage />

Mobile.args = {

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
*/
