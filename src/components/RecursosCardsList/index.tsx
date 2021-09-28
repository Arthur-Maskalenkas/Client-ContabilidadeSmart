import RecursosCard, { RecursosCardProps } from 'components/RecursosCard'
import * as S from './styles'

export type RecursosCardsListProps = {
  items: RecursosCardProps[]
}

const RecursosCardsList = ({ items }: RecursosCardsListProps) => (
  <S.Wrapper>
    {items?.map((items, index) => (
      <S.RecursosCardsListWrapper key={index}>
        <RecursosCard {...items} />
      </S.RecursosCardsListWrapper>
    ))}
  </S.Wrapper>
)

export default RecursosCardsList
