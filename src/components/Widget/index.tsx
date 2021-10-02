import Link from 'next/link'

import * as S from './styles'

type Items = {
  title: string
  slug?: string
}

export type WidgetProps = {
  title: string
  moreWeight?: boolean
  items: Items[]
}

const Widget = ({ title, items, moreWeight = false }: WidgetProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>

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
    </S.ListWrapper>
  </S.Wrapper>
)

export default Widget
