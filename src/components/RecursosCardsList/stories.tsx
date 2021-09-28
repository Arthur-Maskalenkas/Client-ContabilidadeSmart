import { Story, Meta } from '@storybook/react'
import RecursosCardsList, { RecursosCardsListProps } from '.'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import items from './mock'
import { Container } from 'components/Container'

export default {
  title: 'Cards/RecursosCardsList',
  component: RecursosCardsList
} as Meta

export const Default: Story<RecursosCardsListProps> = (args) => (
  <Container>
    <RecursosCardsList {...args} />
  </Container>
)

Default.args = { ...items }

Default.parameters = {
  backgrounds: {
    default: 'mm-light'
  }
}

export const Mobile: Story<RecursosCardsListProps> = (args) => (
  <Container>
    <RecursosCardsList {...args} />
  </Container>
)

Mobile.args = { ...items }

Mobile.parameters = {
  backgrounds: {
    default: 'mm-light'
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1'
  }
}
