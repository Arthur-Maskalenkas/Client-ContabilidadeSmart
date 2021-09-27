import { screen, render } from 'utils/test-utils'

import Home from '.'

describe('<Home />', () => {
  it('deve renderizar os componentes e textos', () => {
    render(<Home />)

    expect(screen.getByText('oi')).toBeInTheDocument()
  })
})
