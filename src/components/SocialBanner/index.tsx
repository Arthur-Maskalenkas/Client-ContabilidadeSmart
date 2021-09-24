import * as S from './styles'

export type SocialBannerProps = {
  altImg: string
  img: string
}

const SocialBanner = ({ altImg, img }: SocialBannerProps) => (
  <S.Wrapper>
    <img alt={altImg} src={img} />
  </S.Wrapper>
)

export default SocialBanner
