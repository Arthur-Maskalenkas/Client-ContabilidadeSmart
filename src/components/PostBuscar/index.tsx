import BannerPage, { BannerPageProps } from 'components/BannerPage'
import * as S from './styles'

export type PostBuscarProps = {
  BannerPageProps: BannerPageProps
  title: string
  subtitle: string
}

const PostBuscar = ({ BannerPageProps, title, subtitle }: PostBuscarProps) => (
  <S.Wrapper>
    <BannerPage {...BannerPageProps} />

    <S.Details>
      <S.Title>{title}</S.Title>
      <S.Description>{subtitle}</S.Description>
    </S.Details>
  </S.Wrapper>
)

export default PostBuscar
