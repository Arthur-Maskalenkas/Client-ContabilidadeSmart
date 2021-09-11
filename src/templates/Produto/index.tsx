import Base from 'templates/Base'
import * as S from './styles'

export type ProdutoTemplateProps = {
  descricaoProduto: string
}

const Produto = ({ descricaoProduto }: ProdutoTemplateProps) => (
  <S.Wrapper>
    <Base>
      <h1>Produto</h1>
    </Base>
  </S.Wrapper>
)

export default Produto
