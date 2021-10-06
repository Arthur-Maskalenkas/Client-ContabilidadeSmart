import BannerPage, { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import MenuAside from 'components/MenuAside'
import Widget, { WidgetProps } from 'components/Widget'
import Base from 'templates/Base'

import * as S from './styles'

export type ArtigoTemplateProps = {
  title: string
  bannerPageProps: BannerPageProps

  widgetCategorias: WidgetProps
  widgetPaginas: WidgetProps
  widgetPostsRecentes: WidgetProps
}

const Artigo = ({
  title,
  bannerPageProps,
  widgetCategorias,
  widgetPaginas,
  widgetPostsRecentes
}: ArtigoTemplateProps) => (
  <S.Wrapper>
    <Base>
      <S.Head>
        <HeadingPage title={title} />
      </S.Head>

      <S.Main>
        <BannerPage {...bannerPageProps} />
        <MenuAside />
      </S.Main>

      <S.SectionWidgets>
        <Widget {...widgetCategorias} />
        <Widget {...widgetPaginas} />
        <Widget {...widgetPostsRecentes} />
      </S.SectionWidgets>
    </Base>
  </S.Wrapper>
)

export default Artigo
