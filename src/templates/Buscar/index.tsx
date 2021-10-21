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
import { resolvePosts } from 'utils/resolvePosts'

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
      where: { tags: { Title_contains: 'contabilidade' } }
    }
  })

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [topPage, setTopPage] = useState<number>(1)
  const lastPage =
    (data?.postsConnection?.values?.length || POSTS_PER_PAGE) / POSTS_PER_PAGE

  if (!data) return <p>loading...</p>

  const { posts } = data

  // Recortando para que nunca acumule posts
  const FORMULA_1 = currentPage * POSTS_PER_PAGE - 3
  const FORMULA_2 = currentPage * POSTS_PER_PAGE
  const postsSlice = posts.slice(FORMULA_1, FORMULA_2)

  const handleClick = (operation: 'nextPage' | 'backPage') => {
    resolvePosts({
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
      fetchMore: fetchMore,
      lastPage: lastPage,
      topPage: topPage,
      setTopPage: setTopPage,
      postsLenght: postsSlice.length,
      postsPerPage: POSTS_PER_PAGE,
      operation: operation
    })
  }

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        <S.Head>
          <HeadingPage title={title} />
        </S.Head>
        <S.MainSection>
          <S.Main>
            {postsSlice.map((item, index) => (
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

            <button onClick={() => handleClick('nextPage')}>Proximo</button>
            <button onClick={() => handleClick('backPage')}>Voltar</button>
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
