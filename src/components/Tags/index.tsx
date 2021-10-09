import Link from 'next/link'

import * as S from './styles'

type ItemType = {
  title: string
  slug: string
}

export type TagsProps = {
  items?: ItemType[]
}

const Tags = ({ items }: TagsProps) => (
  <S.Wrapper>
    {items?.map((item, index) => (
      <S.TagWrapper key={index} role="listitem" aria-label={`Opção de tag ${item.title}`}>
        <Link passHref href={`/tag/${item.slug}`}>
          <S.TagLink>{item.title}</S.TagLink>
        </Link>
      </S.TagWrapper>
    ))}
  </S.Wrapper>
)

export default Tags
