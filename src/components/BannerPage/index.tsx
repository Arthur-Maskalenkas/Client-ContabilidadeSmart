import * as S from './styles'

export type BannerPageProps = {
  backgroundImage: string
  data: string
  tag: string
}

const BannerPage = ({ data, tag, backgroundImage }: BannerPageProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Overlay />
    <S.DetailsWrapper>
      <S.Details>{`on ${data} | By Contabilidade Smart | ${tag}`}</S.Details>
    </S.DetailsWrapper>
  </S.Wrapper>
)

export default BannerPage
