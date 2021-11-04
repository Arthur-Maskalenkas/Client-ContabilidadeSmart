import { NextSeo } from 'next-seo'

import BannerPage, { BannerPageProps } from 'components/BannerPage'
import TextContent from 'components/TextContent'
import BaseUpgraded from 'templates/BaseUpgraded'

import { MenuUnitaryProps } from 'components/Menu'
import { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'

import { useAppDispatch, useAppSelector } from 'hooks/Store'
import { paginaAtual } from 'store/features/pagina/paginaSlice'

import * as S from './styles'

export type ArtigoTemplateProps = {
  slug?: string
  title: string
  subtitulo?: string
  description: string
  bannerPageProps: BannerPageProps
  menuData: MenuUnitaryProps[]
  widgets: WidgetProps[]
  menuAsideItems: MenuAsideProps
}

const Artigo = ({
  slug,
  title,
  subtitulo,
  description,
  bannerPageProps,
  widgets,
  menuAsideItems,
  menuData
}: ArtigoTemplateProps) => {
  const paginaAtualSelector = useAppSelector(
    (state) => state.paginaSlice.paginaAtual
  )
  const dispatch = useAppDispatch()

  dispatch(paginaAtual('categorias'))

  console.log(paginaAtualSelector)

  return (
    <>
      <NextSeo
        title={`${title} - Contabilidade Smart`}
        description={subtitulo}
        canonical={`https://contabilidadesmart.com.br/artigo/${slug}`}
        openGraph={{
          url: `https://contabilidadesmart.com.br/artigo/${slug}`,
          title: title,
          description: subtitulo,
          images: [
            {
              url:
                bannerPageProps?.backgroundImage ||
                'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
              alt: bannerPageProps?.altImage
            }
          ],
          site_name: 'https://contabilidadesmart.com.br/'
        }}
      />
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
