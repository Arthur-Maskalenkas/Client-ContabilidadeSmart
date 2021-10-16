import BannerPage, { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import TextContent from 'components/TextContent'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import Base from 'templates/Base'

import * as S from './styles'

export type BuscarTemplateProps = {
  title: string
  description: string
  bannerPageProps: BannerPageProps

  menuData: MenuUnitaryProps[]

  widgetListCategoriasData: WidgetProps[]
  widgetListPaginasData: WidgetProps[]
  widgetPostsRecentes: WidgetProps[]

  menuAsideItems: MenuAsideProps
}

const Buscar = ({
  title,
  description,
  bannerPageProps,
  widgetListCategoriasData,
  widgetListPaginasData,
  widgetPostsRecentes,
  menuAsideItems,
  menuData
}: BuscarTemplateProps) => {
  const widgets = [
    ...widgetListCategoriasData,
    ...widgetListPaginasData,
    ...widgetPostsRecentes
  ]

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        <S.Head>
          <HeadingPage title={title} />
        </S.Head>

        <S.MainSection>
          <S.Main>
            <BannerPage {...bannerPageProps} />
            <TextContent title={title} content={description} />
          </S.Main>
          <MenuAside {...menuAsideItems} />
        </S.MainSection>

        <S.WidgetSection>
          <WidgetList items={widgets} />
        </S.WidgetSection>
      </Base>
    </S.Wrapper>
  )
}

export default Buscar
