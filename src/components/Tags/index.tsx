import Link from 'next/link'

import * as S from './styles'

type PostType = {
  id: string
}

export type TagProps = {
  title: string
  slug: string
  posts: PostType[]
}

export type TagsProps = {
  items?: TagProps[]
}

const Tags = ({ items }: TagsProps) => {
  const tagHavePosts = (tag: TagProps) => {
    return !!tag.posts.length
  }

  return (
    <S.Wrapper>
      {items?.map(
        (item, index) =>
          tagHavePosts(item) && (
            <S.TagWrapper
              key={index}
              role="listitem"
              aria-label={`Opção de tag ${item.title}`}
            >
              <Link passHref href={`/buscar?tags=${item.slug}`}>
                <S.TagLink>{item.title}</S.TagLink>
              </Link>
            </S.TagWrapper>
          )
      )}
    </S.Wrapper>
  )
}

export default Tags
