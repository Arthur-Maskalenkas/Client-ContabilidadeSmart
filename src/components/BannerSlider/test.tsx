import '../../../setupTests'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'
import { BannerProps } from 'components/Banner'

const items: BannerProps[] = [
  {
    img: 'img/index/Pessoa-Física-votuporanga.jpg',
    title: 'Revisão Tributária',
    subtitle:
      'Assim, garantindo que as atividades de nossos parceiros estejam de acordo com as exigências legais de seu ramo de atuação. ',
    buttonLabel: 'Veja mais',
    buttonLink: '/',
    textDirection: 'left',
    titleImage: 'Um casal planejando as contas'
  },
  {
    img: 'img/index/Fiscal-e-Tributária-votuporanga.jpg',
    title: 'Uma contabilidade',
    titleWithColor: 'Reinventando dinamicamente',
    subtitle:
      'Youtubers, Produtores, Coprodutores, Especialistas, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Redator, Copywriter, Designer Gráfico e Video Maker são como Profissões do Futuro.',
    buttonLabel: 'Veja mais',
    buttonLink: '',
    textDirection: 'center',
    titleImage: 'Contadores fazendo as contas'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-slider')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', {
        name: /Revisão Tributária/i,
        hidden: false
      })
    ).toBeInTheDocument()

    expect(
      screen.getAllByLabelText(/um casal planejando as contas/i)
    ).toHaveLength(2)
  })

  it('deve renderizar com setinhas', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-prev')).toBeInTheDocument()
    expect(container.querySelector('.slick-next')).toBeInTheDocument()
  })
})
