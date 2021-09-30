import Link from 'next/link'

import * as S from './styles'

export type LinkLiProps = {
  title: string
  slug?: string
  moreWeight?: boolean
}

const LinkLi = ({ title, slug, moreWeight }: LinkLiProps) => (
  <S.Wrapper>
    <Link href={`artigo/${slug}`} passHref>
      <S.LinkTitle moreWeight={moreWeight}>{title}</S.LinkTitle>
    </Link>
  </S.Wrapper>
)

export default LinkLi
