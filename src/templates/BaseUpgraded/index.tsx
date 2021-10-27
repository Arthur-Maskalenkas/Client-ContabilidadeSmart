import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import Base from 'templates/Base'
import * as S from './styles'

export type TitleProps = {
  tipoDeBusca?: 'categorias' | 'tags'
  parametroDeBusca: string
}

export type BaseUpgradedTemplateProps = {
  titleWithParam?: TitleProps
  titlePage?: string
  children?: React.ReactNode
  menuData: MenuUnitaryProps[]
  menuAsideItems: MenuAsideProps
  widgets: WidgetProps[]
}

const BaseUpgraded = ({
  children,
  menuData,
  menuAsideItems,
  titlePage,
  widgets,
  titleWithParam
}: BaseUpgradedTemplateProps) => {
  const hasTitleParam = !!titleWithParam

  const titleParamOption = `${titleWithParam?.tipoDeBusca} > ${titleWithParam?.parametroDeBusca}`
  const titlePageOption = titlePage

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        <S.Head>
          <HeadingPage
            title={
              (hasTitleParam ? titleParamOption : titlePageOption) ||
              'O titulo da pagina não foi definido'
            }
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
}

export default BaseUpgraded
