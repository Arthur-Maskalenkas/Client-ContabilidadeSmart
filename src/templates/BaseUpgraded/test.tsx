import { menuasideMock } from 'utils/mocksTemplates/menuAsideMock'
import { menuDataMock } from 'utils/mocksTemplates/menuDataMock'
import { widgetsMock } from 'utils/mocksTemplates/widgets'

import { render, screen } from 'utils/test-utils'

import BaseUpgraded, { BaseUpgradedTemplateProps, TitleProps } from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/MenuAside', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menuaside" />
  }
}))

jest.mock('components/WidgetList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Widgetlist" />
  }
}))

const props: BaseUpgradedTemplateProps = {
  menuAsideItems: menuasideMock,
  menuData: menuDataMock,
  widgets: widgetsMock
}

const titleWithParam: TitleProps = {
  parametroDeBusca: 'titulo de uma pagina',
  tipoDeBusca: 'tags'
}

describe('<BaseUpgraded />', () => {
  it('Vai renderizar o componente ', () => {
    render(
      <BaseUpgraded {...props}>
        <h1>UM filho</h1>
      </BaseUpgraded>
    )

    expect(screen.getByTestId(/mock base/i))
    expect(screen.getByTestId(/mock menuaside/i))
    expect(screen.getByTestId(/mock widgetlist/i))

    expect(
      screen.getByRole('heading', { name: /Um filho/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/O titulo da pagina não foi definido/i)
    ).toBeInTheDocument()
  })

  it('Vai renderizar o componente com um titulo de pagina', () => {
    render(
      <BaseUpgraded {...props} titlePage="Um titulo de pagina">
        <h1>UM filho</h1>
      </BaseUpgraded>
    )

    expect(
      screen.getByRole('heading', { name: /Um titulo de pagina/i })
    ).toBeInTheDocument()
  })

  it('Vai renderizar o componente com o caminho da pagina', () => {
    render(
      <BaseUpgraded {...props} titleWithParam={titleWithParam}>
        <h1>UM filho</h1>
      </BaseUpgraded>
    )

    expect(
      screen.getByRole('heading', { name: /tags > titulo de uma pagina/i })
    ).toBeInTheDocument()
  })
})
