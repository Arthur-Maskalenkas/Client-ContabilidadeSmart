import { render, screen } from 'utils/test-utils'

import ServicesCard, { ServicesCardProps } from '.'

const props: ServicesCardProps = {
  title: 'Um titulo',
  description: 'Uma descriçao',
  slug: 'Um slug',
  icon: 'Facebook'
}

describe('<ServicesCard />', () => {
  it('should render o componente', () => {
    render(<ServicesCard {...props} />)

    expect(screen.getByRole('heading', { name: /um titulo/i })).toBeInTheDocument()

    expect(screen.getByText(/Uma descriçao/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /saiba mais/i })).toBeInTheDocument()
  })

  it('vai ter uma borda laranja se passada', () => {
    render(<ServicesCard {...props} borderColor />)

    expect(screen.getByRole('svg', { name: /facebook/i })).toBeInTheDocument()
  })
})
