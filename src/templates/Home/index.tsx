import Gallery, { GalleryProps } from 'components/Gallery'

import Base from 'templates/Base'
import * as S from './styles'

export type HomeTemplateProps = {
  gallery: GalleryProps
}

const Home = ({ gallery }: HomeTemplateProps) => (
  <Base>
    <S.Wrapper>
      <S.SectionMain>
        <Gallery {...gallery} />
        <S.Intro>
          <S.Title>Não perca uma noticia!</S.Title>
          <S.Title>Acompanhe tudo!</S.Title>
          <S.Title>Faça os outros acompanharem!</S.Title>
        </S.Intro>
      </S.SectionMain>
    </S.Wrapper>
  </Base>
)

export default Home
