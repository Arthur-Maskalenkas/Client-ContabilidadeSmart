import BannerPage, { BannerPageProps } from 'components/BannerPage'
import { MenuUnitaryProps } from 'components/Menu'
import { MenuAsideProps } from 'components/MenuAside'
import TextContent from 'components/TextContent'
import { WidgetProps } from 'components/Widget'

import * as S from './styles'

import BaseUpgraded from 'templates/BaseUpgraded'

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
    <>
      <BaseUpgraded
        menuAsideItems={menuAsideItems}
        menuData={menuData}
        titlePage={title}
        widgets={widgets}
      >
        <S.WrapperContent>
          <BannerPage {...bannerPageProps} />
          <TextContent title={title} content={description} />
        </S.WrapperContent>
      </BaseUpgraded>
    </>
  )
}
export default Artigo
