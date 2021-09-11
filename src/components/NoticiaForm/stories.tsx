import { Story, Meta } from '@storybook/react'
import NoticiaForm from '.'

export default {
  title: 'NoticiaForm',
  component: NoticiaForm,
  parameters: {
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem', margin: '50px auto' }}>
    <NoticiaForm />
  </div>
)
