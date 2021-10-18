import * as S from './styles'

export type BannerPageProps = {
  backgroundImage?: string
  data: string
  tag?: string
  altImage: string
}

const BannerPage = ({
  data,
  tag,
  backgroundImage = 'https://d18lp25pnz8h36.cloudfront.net/installations/common/img/image-not-found.png',
  altImage = 'img not found'
}: BannerPageProps) => {
  const dataFormatada = data
    .replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1')
    .replace('on', '')

  return (
    <S.Wrapper backgroundImage={backgroundImage} aria-label={altImage}>
      <S.Overlay />
      <S.DetailsWrapper>
        <S.Details>{`${dataFormatada} | By Contabilidade Smart | ${tag}`}</S.Details>
      </S.DetailsWrapper>
    </S.Wrapper>
  )
}

export default BannerPage
