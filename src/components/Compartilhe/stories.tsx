import { Story, Meta } from '@storybook/react'
import Compartilhe from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Compartilhe',
  component: Compartilhe
} as Meta

export const Default: Story = () => <Compartilhe />

/*
Default.args = {

}
*/

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

/*
export const Mobile: Story = () => <Compartilhe />

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
