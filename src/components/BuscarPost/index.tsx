import BannerPage, { BannerPageProps } from 'components/BannerPage'
import * as S from './styles'

export type BuscarPostProps = {
  BannerPageProps?: BannerPageProps
  title: string
  subtitle: string
}

const BuscarPost = ({ BannerPageProps, title, subtitle }: BuscarPostProps) => (
  <S.Wrapper>
    {!!BannerPageProps && <BannerPage {...BannerPageProps} />}

    <S.Details>
      <S.Title>{title}</S.Title>
      <S.Description>{subtitle}</S.Description>
    </S.Details>
  </S.Wrapper>
)

export default BuscarPost
