import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NoticiaCard, { NoticiaCardProps } from '.'

const props: NoticiaCardProps = {
  img: '/img/games/img1.jpg',
  title: 'Ferrari',
  description: 'isso e uma ferrari',
  isNew: true
}

describe('<NoticiaCard />', () => {
  it('vai renderizar as informações na tela', () => {
    renderWithTheme(<NoticiaCard {...props} />)

    expect(screen.getByRole('img', { name: 'Ferrari' })).toBeInTheDocument()
    expect(screen.getByText('Ferrari')).toBeInTheDocument()
    expect(screen.getByText(/new/i)).toBeInTheDocument()
    expect(screen.getByText(/isso e uma ferrari/i)).toBeInTheDocument()
  })

  it('Vai renderizar sem o ribbon de "novo"', () => {
    renderWithTheme(<NoticiaCard {...props} isNew={false} />)

    expect(screen.queryByText(/new/i)).not.toBeInTheDocument()
  })
})
