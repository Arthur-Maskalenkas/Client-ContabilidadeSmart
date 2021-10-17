import { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import PostBuscar from 'components/PostBuscar'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import { useQueryPosts } from 'graphql/queries/posts'
import { useRouter } from 'next/dist/client/router'
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

const BuscarTemplate = ({
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

  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryPosts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 3,
      where: { tags: { Title_contains: 'teste' } }
    }
  })

  if (!data) return <p>loading...</p>

  const { posts } = data

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        <S.Head>
          <HeadingPage title={title} />
        </S.Head>
        <S.MainSection>
          <S.Main>
            {data?.posts?.map((item, index) => (
              <PostBuscar
                key={index}
                title={item.title}
                subtitle={item.subtitulo!}
                BannerPageProps={{
                  data: item.created_at,
                  altImage: item.capa?.alternativeText || 'img not found',
                  backgroundImage: item.capa?.url
                }}
              />
            ))}
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

export default BuscarTemplate
