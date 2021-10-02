import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'
import LinkLi, { LinkLiProps } from '.'

export default {
  title: 'LinkLi',
  component: LinkLi
} as Meta

export const Default: Story<LinkLiProps> = (args) => (
  <div
    style={{
      marginTop: '2rem',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      borderTop: `1px solid ${theme.colors.lightGray}`,
      width: '20rem'
    }}
  >
    <LinkLi {...args} />
  </div>
)

Default.args = {
  path: '/tag/um_slug',
  title: 'Um titulo'
}

Default.argTypes = {
  path: {
    control: false
  }
}

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}
