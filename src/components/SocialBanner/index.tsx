import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

export type SocialBannerProps = {
  altImg: string
  img: string
  SocialLink: string
}

const SocialBanner = ({ altImg, img, SocialLink }: SocialBannerProps) => (
  <S.Wrapper>
    <Link href={SocialLink} passHref>
      <a>
        <Image src={`/${img}`} alt={altImg} layout="fill" objectFit="cover" />
      </a>
    </Link>
  </S.Wrapper>
)

export default SocialBanner
