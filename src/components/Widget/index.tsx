import LinkLi from 'components/LinkLi'
import { resolveUrl } from 'utils/resolveUrl'

import * as S from './styles'

type PathTypes = 'categorias' | 'paginas' | 'posts_recentes'

type Items = {
  title: string
  slug: string
}

export type WidgetProps = {
  title: string
  moreWeight?: boolean
  path: PathTypes
  items: Items[]
}

const Widget = ({ title, items, path, moreWeight = false }: WidgetProps) => {
  const resolvePath = (path: PathTypes, slug: string) => {
    const verificacao =
      path != 'categorias'
        ? resolveUrl('artigos', slug)
        : `/buscar?categorias=${slug}`

    return verificacao
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.ListWrapper aria-label={`Opções do Widget ${title}`}>
        {items.map((item, index) => (
          <LinkLi
            key={index}
            moreWeight={moreWeight}
            title={item.title}
            path={resolvePath(path, item.slug)}
          />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default Widget
