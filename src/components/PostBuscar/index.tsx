import BannerPage, { BannerPageProps } from 'components/BannerPage'
import Compartilhe from 'components/Compartilhe'
import TextContent from 'components/TextContent'
import * as S from './styles'

export type PostBuscarProps = {
  BannerPageProps: BannerPageProps
  title: string
  description: string
}

const PostBuscar = ({
  BannerPageProps,
  title,
  description
}: PostBuscarProps) => (
  <S.Wrapper>
    <BannerPage {...BannerPageProps} />
    <S.Title>{title}</S.Title>

    <TextContent content={description} />
  </S.Wrapper>
)

export default PostBuscar
