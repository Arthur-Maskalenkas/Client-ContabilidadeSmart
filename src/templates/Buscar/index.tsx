import { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import PostBuscar from 'components/PostBuscar'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import { useQueryPosts } from 'graphql/queries/posts'
import { useState } from 'react'
import Base from 'templates/Base'

import * as S from './styles'

export const POSTS_PER_PAGE = 3

export type BuscarTemplateProps = {
  title: string
  description: string
  bannerPageProps: BannerPageProps
  menuData: MenuUnitaryProps[]
  widgets: WidgetProps[]
  menuAsideItems: MenuAsideProps
}

const BuscarTemplate = ({
  title,
  widgets,
  menuAsideItems,
  menuData
}: BuscarTemplateProps) => {
  const { data, loading, fetchMore } = useQueryPosts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: POSTS_PER_PAGE,
      where: { tags: { Title_contains: 'teste' } }
    }
  })

  const [page, setPage] = useState<number>(0)
  const [topPage, setTopPage] = useState<number>(1)
  const lastPage = (data?.postsConnection?.values?.length || 2) / POSTS_PER_PAGE

  if (!data) return <p>loading...</p>

  const { posts } = data

  const handleClick = () => {
    // resolvePosts()
  }

  // Formula
  const postsPerPage = data.posts.slice(
    data?.posts.length - POSTS_PER_PAGE,
    data.posts.length
  )

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

            <button onClick={handleClick}>Clique em mim</button>
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
