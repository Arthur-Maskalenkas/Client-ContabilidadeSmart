import '../../../setupTests'

import { screen, render } from 'utils/test-utils'

import Home from '.'

import mockBannerSlider from 'components/BannerSlider/mock'

import mockWidgetList from 'components/WidgetList/mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock BannerSlider" />
  }
}))

jest.mock('components/RecursosCardsList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock RecursosCardsList" />
  }
}))

jest.mock('components/ServicesCardsList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock ServicesCardsList" />
  }
}))

jest.mock('components/SocialBannerSlides', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock SocialBannerSlides" />
  }
}))

jest.mock('components/WidgetList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock WidgetList" />
  }
}))

const props = {
  bannerSliderData: mockBannerSlider,
  widgetListData: mockWidgetList
}

describe('<Home />', () => {
  it('deve renderizar os componentes e textos', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId(/mock Base/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock Bannerslider/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock RecursosCardsList/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock ServicesCardsList/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock WidgetList/i)).toBeInTheDocument()
  })
})
