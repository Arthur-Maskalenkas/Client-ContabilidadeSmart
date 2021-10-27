import BannerPage, { BannerPageProps } from 'components/BannerPage'
import TextContent from 'components/TextContent'
import BaseUpgraded from 'templates/BaseUpgraded'

import { MenuUnitaryProps } from 'components/Menu'
import { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'

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
