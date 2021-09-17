import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Banner, { BannerProps } from '.'

const props: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Sua empresa preparada',
  titleWithColor: 'Um titulo colorido',
  titleImage: 'Um casal planejando o futuro',
  subtitle: 'Venha fazer uma parceria de sucesso integrando ao novo normal',
  buttonLabel: 'Veja mais',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('vai renderizar corretamente, com cor', () => {
    render(<Banner {...props} isOpen={true} />)

    expect(
      screen.getByRole('heading', { name: /sua empresa preparada/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Venha fazer uma parceria de sucesso integrando ao novo normal/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Um casal planejando o futuro/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /um titulo colorido/i })).toHaveStyle({
      color: theme.colors.secondary
    })
  })

  describe('vai renderizar as posiçoes esquerda direita e centro', () => {
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

  describe('Vai renderizar as aparições com base nos estados de isOpen', () => {
    it('Vai renderizar os titulos escondidos', () => {
      render(<Banner {...props} isOpen={false} />)

      const SubtitleElement = screen.getByRole('heading', {
        name: /sua empresa preparada/i
      })

      const TitleElement = screen.getByRole('heading', { name: /sua empresa preparada/i })

      const titleWithColorElement = screen.getByRole('heading', {
        name: /um titulo colorido/i
      })

      expect(SubtitleElement).toHaveStyle({ opacity: 0 })
      expect(TitleElement).toHaveStyle({ opacity: 0 })
      expect(titleWithColorElement).toHaveStyle({ opacity: 0 })
    })

    it('Vai renderizar os titulos na tela', () => {
      render(<Banner {...props} isOpen={true} />)

      const SubtitleElement = screen.getByRole('heading', {
        name: /sua empresa preparada/i
      })

      const TitleElement = screen.getByRole('heading', { name: /sua empresa preparada/i })

      const titleWithColorElement = screen.getByRole('heading', {
        name: /um titulo colorido/i
      })

      expect(SubtitleElement).toHaveStyle({ opacity: 1 })
      expect(TitleElement).toHaveStyle({ opacity: 1 })
      expect(titleWithColorElement).toHaveStyle({ opacity: 1 })
    })
  })
})
