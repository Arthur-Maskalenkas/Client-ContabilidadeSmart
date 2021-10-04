import { Container } from 'components/Container'
import Logo from 'components/Logo'
import MediaWatch from 'components/MediaWatch'
import * as S from './styles'

export type HeadingPageProps = {
  title: string
}

const HeadingPage = ({ title }: HeadingPageProps) => (
  <S.Wrapper>
    <Container>
      <MediaWatch greaterThan="large">
        <Logo size="smallNegativo" />
      </MediaWatch>
      <S.Title>{title}</S.Title>

      <S.linhas>
        <S.linha />
        <S.linha />
        <S.linha />
      </S.linhas>
    </Container>
  </S.Wrapper>
)

export default HeadingPage
