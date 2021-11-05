import { render, screen } from 'utils/test-utils'

import Artigo, { ArtigoTemplateProps } from '.'
import { menuasideMock } from 'utils/mocksTemplates/menuAsideMock'
import { widgetsMock } from 'utils/mocksTemplates/widgets'
import { menuDataMock } from 'utils/mocksTemplates/menuDataMock'
import { Provider } from 'react-redux'
import { mockStoreDefault } from 'utils/mocksTemplates/storeMock'

jest.mock('templates/BaseUpgraded', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseUpgraded">{children}</div>
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

const props: ArtigoTemplateProps = {
  title: 'Será que vale a pena ser MEI',
  bannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
    data: '23 out 2020',
    slug: 'Um slug',
    altImage: 'uma alt image'
  },
  description: 'um texto qualquer',
  widgets: widgetsMock,
  menuAsideItems: menuasideMock,
  menuData: menuDataMock
}

describe('<Artigo />', () => {
  it('should render the heading', () => {
    render(
      <Provider store={mockStoreDefault}>
        <Artigo {...props} />
      </Provider>
    )

    expect(screen.getByTestId(/Mock BaseUpgraded/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock bannerpage/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock textcontent/i)).toBeInTheDocument()
  })
})
