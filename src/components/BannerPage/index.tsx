import Link from 'next/link'
import { resolveUrl } from 'utils/resolveUrl'

import * as S from './styles'

export type BannerPageProps = {
  backgroundImage?: string
  data: string
  slug: string
  altImage: string
}

const BannerPage = ({
  data,
  backgroundImage = 'https://cdn.shopify.com/s/files/1/2425/3665/products/102-022_800x.jpg?v=1574792050',
  altImage = 'img not found',
  slug
}: BannerPageProps) => {
  const dataFormatada = data
    .replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1')
    .replace('on', '')

  return (
    <>
      <Link href={resolveUrl('artigos', slug)} passHref>
        <S.ImageWrapper>
          <S.Image src={backgroundImage} alt={altImage} />
          <S.Overlay />
          <S.ImageDetails>{`${dataFormatada} | By Contabilidade Smart `}</S.ImageDetails>
        </S.ImageWrapper>
      </Link>
    </>
  )
}

export default BannerPage
