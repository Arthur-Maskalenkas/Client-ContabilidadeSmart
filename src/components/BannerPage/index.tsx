import * as S from './styles'

export type BannerPageProps = {
  backgroundImage: string
  data: string
  tag: string
}

const BannerPage = ({ data, tag, backgroundImage }: BannerPageProps) => {
  const dataFormatada = data.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1').replace('on','')

  return (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Overlay />
    <S.DetailsWrapper>
      <S.Details>{`${dataFormatada} | By Contabilidade Smart | ${tag}`}</S.Details>
    </S.DetailsWrapper>
  </S.Wrapper>
)}

export default BannerPage
