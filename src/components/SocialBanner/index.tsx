import Image from 'next/image'

import * as S from './styles'

export type SocialBannerProps = {
  altImg: string
  img: string
}

const SocialBanner = ({ altImg, img }: SocialBannerProps) => (
  <S.Wrapper>
    <Image src={`/${img}`} alt={altImg} layout="fill" objectFit="cover" />
  </S.Wrapper>
)

export default SocialBanner
