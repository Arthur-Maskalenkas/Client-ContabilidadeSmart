import { render, screen } from 'utils/test-utils'

import Artigo from '.'

describe('<Artigo />', () => {
  it('should render the heading', () => {
   render(<Artigo />)

    expect(screen.getByRole('heading', { name: /Artigo/i })).toBeInTheDocument()

  })
})
