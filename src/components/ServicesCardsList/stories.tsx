import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'
import ServicesCardsList, { ServicesCardsListProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import items from './mock'

export default {
  title: 'Cards/ServicesCardsList',
  component: ServicesCardsList
} as Meta

export const Default: Story<ServicesCardsListProps> = (args) => (
  <Container>
    <div>
      <ServicesCardsList {...args} />
    </div>
  </Container>
)

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

Default.args = {
  ...items
}

export const Mobile: Story<ServicesCardsListProps> = (args) => (
  <Container>
    <div>
      <ServicesCardsList {...args} />
    </div>
  </Container>
)

Mobile.args = {
  ...items
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
