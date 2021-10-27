import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import Base from 'templates/Base'
import * as S from './styles'

type TitleProps = {
  tipoDeBusca: 'categorias' | 'tags'
  parametroDeBusca: string
}

type BaseUpgradedTemplateProps = {
  title: TitleProps
  children: React.ReactNode
  menuData: MenuUnitaryProps[]
  menuAsideItems: MenuAsideProps
  widgets: WidgetProps[]
}

const BaseUpgraded = ({
  children,
  menuData,
  menuAsideItems,
  title,
  widgets
}: BaseUpgradedTemplateProps) => (
  <S.Wrapper>
    <Base menuData={menuData}>
      <S.Head>
        <HeadingPage
          title={`${title.tipoDeBusca} > ${title.parametroDeBusca}`}
        />
      </S.Head>
      <S.MainSection>
        <S.Main>{children}</S.Main>
        <MenuAside {...menuAsideItems} />
      </S.MainSection>

      <S.WidgetSection>
        <WidgetList items={widgets} />
      </S.WidgetSection>
    </Base>
  </S.Wrapper>
)

export default BaseUpgraded
