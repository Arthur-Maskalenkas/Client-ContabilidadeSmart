import { render, screen } from 'utils/test-utils'

import mock from './mock'

import MaisVistos from '.'

describe('<MaisVistos />', () => {
  it('should render the heading', () => {
    render(<MaisVistos items={mock.items} />)

    expect(
      screen.getByRole('link', { name: /Quais os tipos de lançamentos/i })
    ).toBeInTheDocument()
  })
})
