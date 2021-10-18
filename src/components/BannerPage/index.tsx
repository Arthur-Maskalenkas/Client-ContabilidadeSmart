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
  backgroundImage = 'https://cdn.shopify.com/s/files/1/2425/3665/products/102-022_800x.jpg?v=1574792050',
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
