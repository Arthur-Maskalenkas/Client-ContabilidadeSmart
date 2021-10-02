import Link from 'next/link'
import React from 'react'

import * as S from './styles'

export type LinkLiProps = {
  title: string
  path?: string
  moreWeight?: boolean
}

const LinkLi = ({ title, path, moreWeight }: LinkLiProps) => {
  return (
    <S.Wrapper aria-label={`Opção ${title}`}>
      <S.LinkTitleWrapper>
        <Link href={`${path}`} passHref>
          <S.LinkTitle role="link" moreWeight={moreWeight}>
            {title}
          </S.LinkTitle>
        </Link>
      </S.LinkTitleWrapper>
    </S.Wrapper>
  )
}

export default LinkLi
