import { BannerPageProps } from 'components/BannerPage'
import { MenuUnitaryProps } from 'components/Menu'
import { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'

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
