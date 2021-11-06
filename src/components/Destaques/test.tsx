import { render, screen } from 'utils/test-utils'

import mock from './mock'

import Destaques from '.'

describe('<Destaques />', () => {
  it('should render the heading', () => {
    render(<Destaques items={mock} />)

    expect(
      screen.getByRole('link', {
        name: /Quais os tipos de lançamentos/i
      })
    ).toBeInTheDocument()
  })
})
