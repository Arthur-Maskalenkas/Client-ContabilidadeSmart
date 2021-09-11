import { Story, Meta } from '@storybook/react/types-6-0'
import NoticiaCard, { NoticiaCardProps } from '.'

export default {
  title: 'NoticiaCard',
  component: NoticiaCard,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mm-light'
    }
  }
} as Meta

export const Default: Story<NoticiaCardProps> = (args) => (
  <div style={{ width: '30rem', margin: '60px auto' }}>
    <NoticiaCard {...args} />
  </div>
)

Default.args = {
  img: '/img/Carro/ferrari1.jpg',
  title: 'Titulo',
  isNew: true,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium nesciunt'
}
