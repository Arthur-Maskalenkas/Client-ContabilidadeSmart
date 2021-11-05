import { MockedProvider } from '@apollo/client/testing'
import { Provider } from 'react-redux'

import { menuasideMock } from 'utils/mocksTemplates/menuAsideMock'
import { menuDataMock } from 'utils/mocksTemplates/menuDataMock'
import { mockStoreDefault } from 'utils/mocksTemplates/storeMock'
import { widgetsMock } from 'utils/mocksTemplates/widgets'
import { render, screen } from 'utils/test-utils'

import Buscar, { BuscarTemplateProps } from '.'

import { postMock } from './mocks'

jest.mock('templates/BaseUpgraded', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseUpgraded">{children}</div>
  }
}))

// aonde tiver chamando o next/router, use o useRouter
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: '',
  asPath: '',
  route: '/'
}))

// Sempre mokar o next/link quando for usar rotas
jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

const props: BuscarTemplateProps = {
  bannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
    data: '23 out 2020',
    slug: 'Um slug',
    altImage: 'uma alt image'
  },
  description: 'uma descrição',
  title: { tipoDeBusca: 'tags', parametroDeBusca: 'um parametro' },
  menuAsideItems: menuasideMock,
  menuData: menuDataMock,
  widgets: widgetsMock
}

describe('<Buscar />', () => {
  it('Vai inciar com um loading', () => {
    render(
      <MockedProvider mocks={[postMock]} addTypename={false}>
        <Provider store={mockStoreDefault}>
          <Buscar {...props} />
        </Provider>
      </MockedProvider>
    )

    expect(screen.getByText('loading...')).toBeInTheDocument()
  })

  it('Vai renderizar o template após o loading', async () => {
    render(
      <MockedProvider mocks={[postMock]}>
        <Provider store={mockStoreDefault}>
          <Buscar {...props} />
        </Provider>
      </MockedProvider>
    )

    expect(await screen.findByTestId(/mock BaseUpgraded/i)).toBeInTheDocument()

    expect(await screen.findByLabelText(/proxima pagina/i)).toBeInTheDocument()
    expect(await screen.findByLabelText(/pagina anterior/i)).toBeInTheDocument()

    // Post 1
    expect(
      await screen.findByRole('heading', { name: /contábil/i })
    ).toBeInTheDocument()

    expect(
      await screen.findByText(/Um subtitulo do post contabill/i)
    ).toBeInTheDocument()
  })
})
