import { render, screen } from 'utils/test-utils'

import RecursosCard from '.'

import mock from './mock'

describe('<RecursosCard />', () => {
  it('should render the component', () => {
    render(<RecursosCard {...mock} />)

    expect(screen.getByRole('article')).toBeInTheDocument()

    expect(screen.getByRole('svg', { name: /cubes/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /O crescimento do negócio/i }))

    expect(
      screen.getByText(
        /No mundo dos negócios, crescer é sinônimo de inovar. As empresas que querem se manter e se destacar no mercado precisam/i
      )
    )
  })
})
