import Button from 'components/Button'
import { LINK_SITE } from 'utils/globalVars'
import * as S from './styles'

const Empty = () => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="duas pessoas em cima do numero 404"
      role="image"
    />

    <S.Title>Pagina 404</S.Title>
    <S.Description>
      Me perdoe por esse transtorno! Eu tentei o meu melhor :({' '}
    </S.Description>

    <Button href={LINK_SITE}>Voltar para a pagina inicial</Button>
  </S.Wrapper>
)

export default Empty
