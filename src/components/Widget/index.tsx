import LinkLi from 'components/LinkLi'
import Link from 'next/link'

import * as S from './styles'

type PathTypes = 'categorias' | 'paginas' | 'posts_recentes'

type OptionType = {
  title: string
  slug: string
}

type ItemType = {
  title: string
  moreWeight?: boolean
  path: PathTypes
  options: OptionType[]
}

export type WidgetProps = {
  // title: string
  // moreWeight?: boolean
  // items: Items[]
  items: ItemType[]
}

const Widget = ({ items }: WidgetProps) => {
  const resolvePath = (path: PathTypes, slug: string) => {
    const verificacao = path != 'categorias' ? `/artigo/${slug}` : `/categorias/${slug}`

    return verificacao
  }

  return (
    <S.Wrapper>
      {items.map((List, index) => (
        <S.WidgetContentWrapper key={index} aria-label={`Opções do Widget ${List.title}`}>
          <S.Title>{List.title}</S.Title>
          <S.ListWrapper aria-label={`opções do Widget ${List.title}`}>
            {List.options?.map((ListItems, index) => (
              <LinkLi
                key={index}
                title={ListItems.title}
                // Testar depois
                path={resolvePath(List.path, ListItems.slug)}
              />
            ))}
          </S.ListWrapper>
        </S.WidgetContentWrapper>
      ))}
    </S.Wrapper>
  )
}

export default Widget

{
  /* <S.Title>{title}</S.Title>

<S.ListWrapper aria-label={`Opções do Widget ${title}`}>
  {items.map((item, index) => (
    <S.WidgetLinkWrapper
      key={index}
      role="listitem"
      aria-label={`opção ${item.title}`}
    >
      <Link href={`artigo/${item.slug}`} passHref>
        <S.WidgetLink role="link" moreWeight={moreWeight}>
          {item.title}
        </S.WidgetLink>
      </Link>
    </S.WidgetLinkWrapper>
  ))}
</S.ListWrapper> */
}
