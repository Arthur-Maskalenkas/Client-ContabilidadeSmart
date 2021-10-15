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

const Buscar = () => (
  <S.Wrapper>
    <h1>Buscar</h1>
  </S.Wrapper>
)

export default Buscar
