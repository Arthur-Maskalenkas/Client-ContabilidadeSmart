import BannerPage, { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import Logo from 'components/Logo'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import TextContent from 'components/TextContent'
import Widget, { WidgetProps } from 'components/Widget'
import Base from 'templates/Base'

import * as S from './styles'

export type ArtigoTemplateProps = {
  title: string
  description: string
  bannerPageProps: BannerPageProps

  widgetCategorias: WidgetProps
  widgetPaginas: WidgetProps
  widgetPostsRecentes: WidgetProps

  menuAsideItems: MenuAsideProps
}

const Artigo = ({
  title,
  description,
  bannerPageProps,
  widgetCategorias,
  widgetPaginas,
  widgetPostsRecentes,
  menuAsideItems
}: ArtigoTemplateProps) => (
  <S.Wrapper>
    <Base>
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

      <S.SectionWidgets>
        <Widget {...widgetCategorias} />
        <Widget {...widgetPaginas} />
        <Widget {...widgetPostsRecentes} />
        <Logo size="medium" />
      </S.SectionWidgets>
    </Base>
  </S.Wrapper>
)

export default Artigo
