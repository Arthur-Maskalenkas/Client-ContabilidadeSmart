import { BannerPageProps } from 'components/BannerPage'
import HeadingPage from 'components/HeadingPage'
import { MenuUnitaryProps } from 'components/Menu'
import MenuAside, { MenuAsideProps } from 'components/MenuAside'
import BuscarPost from 'components/BuscarPost'
import { WidgetProps } from 'components/Widget'
import WidgetList from 'components/WidgetList'
import { useQueryPosts } from 'graphql/queries/posts'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import Base from 'templates/Base'
import { parseQueryStringToWhere } from 'utils/filter'
import { resolvePagination } from 'utils/resolvePagination'

import * as S from './styles'
import IconsWrapper from 'components/IconsWrapper'

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
  const lastPage =
    (data?.postsConnection?.values?.length || POSTS_PER_PAGE) / POSTS_PER_PAGE

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
      postsLenght: postsSlice.length,
      postsPerPage: POSTS_PER_PAGE,
      operation: operation
    })
  }

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        <S.Head>
          <HeadingPage
            title={`${title.tipoDeBusca} > ${title.parametroDeBusca}`}
          />
        </S.Head>
        <S.MainSection>
          <S.Main>
            {postsSlice.map((item, index) => (
              <BuscarPost
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

            <S.ButtonsWrapper>
              <S.Button onClick={() => handleClick('nextPage')}>
                <IconsWrapper icon="NavigateNext" />
              </S.Button>
              <S.Button onClick={() => handleClick('backPage')}>
                <IconsWrapper icon="NavigateBefore" />
              </S.Button>
            </S.ButtonsWrapper>
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
