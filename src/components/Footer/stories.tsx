import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
