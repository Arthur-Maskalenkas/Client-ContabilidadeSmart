import Link from 'next/link'
import Image from 'next/image'

import { resolveUrl } from 'utils/resolveUrl'

import * as S from './styles'
import { resolvePathTrue } from 'utils/resolvePathNextImage'
import { IMAGE_NOT_FOUND } from 'utils/globalVars'

export type BannerPageProps = {
  backgroundImage?: string
  data: string
  slug: string
  altImage: string
}

const BannerPage = ({
  data,
  backgroundImage,
  altImage = 'alt img not defined',
  slug
}: BannerPageProps) => {
  const dataFormatada = data
    .replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1')
    .replace('on', '')

  return (
    <>
      <Link href={resolveUrl('artigos', slug)} passHref>
        <S.ImageWrapper>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            src={resolvePathTrue(backgroundImage!, IMAGE_NOT_FOUND)}
            alt={altImage}
            layout="fill"
          />
          <S.Overlay />
          <S.ImageDetails>{`${dataFormatada} | By Contabilidade Smart `}</S.ImageDetails>
        </S.ImageWrapper>
      </Link>
    </>
  )
}

export default BannerPage
