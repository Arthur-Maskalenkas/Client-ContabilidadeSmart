import { Story, Meta } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story = () => <Empty />

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}
/*
Default.args = {

}
*/

/*
export const Mobile: Story = () => <Empty />

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
