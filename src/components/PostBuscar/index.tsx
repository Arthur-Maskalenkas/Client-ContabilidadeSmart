import BannerPage, { BannerPageProps } from 'components/BannerPage'
import Compartilhe from 'components/Compartilhe'
import TextContent from 'components/TextContent'
import * as S from './styles'

const obj = { title: 'oioi', idade: 10,  teste: 'dsadsa', testando: 'dsadsa'}

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
    <Compartilhe />

    <TextContent content={description} />
  </S.Wrapper>
)

export default PostBuscar
