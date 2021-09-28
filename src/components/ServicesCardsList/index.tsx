import ServicesCard, { ServicesCardProps } from 'components/ServicesCard'
import * as S from './styles'

export type ServicesCardsListProps = {
  items: ServicesCardProps[]
}

const ServicesCardsList = ({ items }: ServicesCardsListProps) => (
  <S.Wrapper>
    {items?.map((items, index) => (
      <S.ServicesCardWrapper key={index}>
        <ServicesCard {...items} />
      </S.ServicesCardWrapper>
    ))}
  </S.Wrapper>
)

export default ServicesCardsList
