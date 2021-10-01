import Link from 'next/link'
import React from 'react'

import * as S from './styles'

export type LinkLiProps = {
  title: string
  slug?: string
  moreWeight?: boolean
  hasLink?: boolean
  children?: React.ReactNode
}

const LinkLi = ({ title, slug, moreWeight, children, hasLink = true }: LinkLiProps) => {
  return (
    <S.Wrapper as={hasLink ? 'li' : 'div'}>
      {hasLink ? (
        <Link href={`artigo/${slug}`} passHref>
          <S.LinkTitle moreWeight={moreWeight}>{title}</S.LinkTitle>
        </Link>
      ) : (
        <li aria-label={`opções de ${title}`}>
          <S.LinkTitle moreWeight={moreWeight} as="p">
            {title}
          </S.LinkTitle>
          {children}
        </li>
      )}
    </S.Wrapper>
  )
}

export default LinkLi
