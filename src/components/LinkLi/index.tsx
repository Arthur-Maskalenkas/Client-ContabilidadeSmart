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
      <Link href={`${path}`} passHref>
        <S.LinkTitleWrapper>
          <S.LinkTitle role="link" moreWeight={moreWeight}>
            {title}
          </S.LinkTitle>
        </S.LinkTitleWrapper>
      </Link>
    </S.Wrapper>
  )
}

export default LinkLi
