import * as S from './styles'

export type BuscarPostLoadingProps = {
  items: number
}

const BuscarPostLoading = ({ items = 1 }: BuscarPostLoadingProps) => {
  const lista = Array(items).fill('')

  return (
    <S.Wrapper>
      {lista.map((item, index) => (
        <S.Image key={index} />
      ))}
    </S.Wrapper>
  )
}

export default BuscarPostLoading
