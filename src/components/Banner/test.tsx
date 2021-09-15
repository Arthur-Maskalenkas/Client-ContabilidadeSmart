import { render, screen } from 'utils/test-utils'

import Banner, { BannerProps } from '.'

const props: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Sua empresa preparada',
  titleImage: 'Um casal planejando o futuro',
  subtitle: 'Venha fazer uma parceria de sucesso integrando ao novo normal',
  buttonLabel: 'Veja mais',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('vai renderizar corretamente', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /sua empresa preparada/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Venha fazer uma parceria de sucesso integrando ao novo normal/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Um casal planejando o futuro/i })
    ).toBeInTheDocument()
  })

  describe('<Banner/> position', () => {
    it('vai renderizar para a esquerda', () => {
      render(<Banner {...props} textDirection="left" />)

      const wrapperTextos = screen.getByRole('heading', {
        name: /sua empresa preparada/i
      }).parentElement

      expect(wrapperTextos).toHaveStyle({ alignItems: 'flex-start' })
    })

    it('vai renderizar para o centro', () => {
      render(<Banner {...props} textDirection="center" />)

      const wrapperTextos = screen.getByRole('heading', {
        name: /sua empresa preparada/i
      }).parentElement

      expect(wrapperTextos).toHaveStyle({ gridColumn: '2' })
      expect(wrapperTextos).toHaveStyle({ textAlign: 'center' })
      expect(wrapperTextos).toHaveStyle({ alignItems: 'center' })
    })

    it('vai renderizar para a direita', () => {
      render(<Banner {...props} textDirection="right" />)

      const wrapperTextos = screen.getByRole('heading', {
        name: /sua empresa preparada/i
      }).parentElement

      expect(wrapperTextos).toHaveStyle({ gridColumn: '2' })
      expect(wrapperTextos).toHaveStyle({ alignItems: 'flex-end' })
    })
  })
})
