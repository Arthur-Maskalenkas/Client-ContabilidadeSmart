import { Story, Meta } from '@storybook/react/types-6-0'
import IconsWrapper, { IconsProps } from '.'

export default {
  title: 'IconsWrapper',
  component: IconsWrapper,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['1rem', '3rem', '6rem', '9rem']
      }
    },
    sizeMedia: {
      control: {
        type: 'inline-radio',
        options: ['1rem', '3rem', '6rem', '9rem']
      }
    },
    relativeY: {
      control: {
        type: 'inline-radio',
        options: ['1rem', '3rem', '6rem', '9rem']
      }
    },
    hoverColor: {
      control: {
        type: 'inline-radio',
        options: ['secondary', 'white']
      }
    }
  }
} as Meta

export const Default: Story<IconsProps> = (args) => <IconsWrapper {...args} />

Default.args = {
  size: '6rem',
  icon: 'Whatsapp',
  color: 'secondary'
}
