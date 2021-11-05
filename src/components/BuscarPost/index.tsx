import Link from 'next/link'

import BannerPage, { BannerPageProps } from 'components/BannerPage'
import * as S from './styles'
import { LINK_SITE } from 'utils/globalVars'

export type BuscarPostProps = {
  BannerPageProps?: BannerPageProps
  title: string
  subtitle: string
}

const BuscarPost = ({ BannerPageProps, title, subtitle }: BuscarPostProps) => (
  <S.Wrapper>
    {!!BannerPageProps && <BannerPage {...BannerPageProps} />}

    <S.Details>
      <Link href={`${LINK_SITE}/artigo/${BannerPageProps?.slug}`} passHref>
        <a>
          <S.Title>{title}</S.Title>
        </a>
      </Link>
      <S.Description>{subtitle}</S.Description>
    </S.Details>
  </S.Wrapper>
)

export default BuscarPost
