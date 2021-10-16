import { render, screen } from 'utils/test-utils'

import {
  mockCategorias,
  mockPaginas,
  mockPostsRecentes
} from 'components/Widget/mock'

import {
  maisVistosMock,
  tagsMock,
  navigationMock
} from 'components/MenuAside/mock'

import Artigo from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/HeadingPage', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock HeadingPage" />
  }
}))

jest.mock('components/BannerPage', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock BannerPage" />
  }
}))

jest.mock('components/TextContent', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock TextContent" />
  }
}))

jest.mock('components/MenuAside', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock MenuAside" />
  }
}))

const props = {
  title: 'Será que vale a pena ser MEI',
  bannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
    data: '23 out 2020',
    tag: ''
  },
  description: 'um texto qualquer',
  widgetCategorias: mockCategorias,
  widgetPaginas: mockPaginas,
  widgetPostsRecentes: mockPostsRecentes,
  menuAsideItems: {
    menuData: navigationMock,
    maisVistosData: maisVistosMock,
    tagsData: tagsMock
  }
}

describe('<Artigo />', () => {
  it('should render the heading', () => {
    render(<Artigo {...props} />)

    expect(screen.getByTestId(/mock base/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock headingpage/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock bannerpage/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock textcontent/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock menuaside/i)).toBeInTheDocument()
  })
})
