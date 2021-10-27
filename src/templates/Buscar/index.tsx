import { BannerPageProps } from 'components/BannerPage'
import { MenuUnitaryProps } from 'components/Menu'
import { MenuAsideProps } from 'components/MenuAside'
import { WidgetProps } from 'components/Widget'
import { useQueryPosts } from 'graphql/queries/posts'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { parseQueryStringToWhere } from 'utils/filter'
import { resolvePagination } from 'utils/resolvePagination'

import * as S from './styles'
import BaseUpgraded from 'templates/BaseUpgraded'
import BuscarPostLoading from 'components/BuscarPostLoading'
import BuscarButton from 'components/BuscarButton'
import BuscarPost from 'components/BuscarPost'

export const POSTS_PER_PAGE = 3

type TitleProps = {
  tipoDeBusca: 'categorias' | 'tags'
  parametroDeBusca: string
}

export type BuscarTemplateProps = {
  title: TitleProps
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
  const { query } = useRouter()

  const { data, loading, fetchMore } = useQueryPosts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: POSTS_PER_PAGE,
      where: parseQueryStringToWhere({
        queryString: query
      })
    }
  })

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [topPage, setTopPage] = useState<number>(1)
  const lastPage = Math.ceil(
    (data?.postsConnection?.values?.length || POSTS_PER_PAGE) / POSTS_PER_PAGE
  )

  if (!data) return <p>loading...</p>

  const { posts } = data

  // Recortando para que nunca acumule posts
  const FORMULA_1 = currentPage * POSTS_PER_PAGE - 3
  const FORMULA_2 = currentPage * POSTS_PER_PAGE
  const postsSlice = posts.slice(FORMULA_1, FORMULA_2)

  const handleClick = (operation: 'nextPage' | 'backPage') => {
    resolvePagination({
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
      fetchMore: fetchMore,
      lastPage: lastPage,
      topPage: topPage,
      setTopPage: setTopPage,
      postsLenght: data?.posts.length,
      postsPerPage: POSTS_PER_PAGE,
      operation: operation
    })
  }

  return (
    <S.Wrapper>
      <BaseUpgraded
        menuAsideItems={menuAsideItems}
        menuData={menuData}
        title={title}
        widgets={widgets}
      >
        {postsSlice.map((item, index) => (
          <BuscarPost
            key={index}
            title={item.title}
            subtitle={item.subtitulo!}
            BannerPageProps={{
              data: item.created_at,
              altImage: item.capa?.alternativeText || 'img not found',
              backgroundImage: item.capa?.url,
              slug: item.slug
            }}
          />
        ))}
        {loading ? (
          <BuscarPostLoading items={3} />
        ) : (
          <S.ButtonsWrapper>
            <BuscarButton
              onClick={() => handleClick('nextPage')}
              icon="NavigateNext"
              currentPage={currentPage}
              lastPage={lastPage}
            />
            <BuscarButton
              onClick={() => handleClick('backPage')}
              icon="NavigateBefore"
              currentPage={currentPage}
              lastPage={lastPage}
            />
          </S.ButtonsWrapper>
        )}
      </BaseUpgraded>
    </S.Wrapper>
  )
}

export default BuscarTemplate
