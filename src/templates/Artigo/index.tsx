import BannerPage, { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import TextContent from 'components/TextContent'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'

import Base from 'templates/Base'

import * as S from './styles'

export type ArtigoTemplateProps = {
  title: string
  description: string
  bannerPageProps: BannerPageProps
  menuData: MenuUnitaryProps[]
  widgets: WidgetProps[]
  menuAsideItems: MenuAsideProps
}

const Artigo = ({
  title,
  description,
  bannerPageProps,
  widgets,
  menuAsideItems,
  menuData
}: ArtigoTemplateProps) => {
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
export default Artigo
