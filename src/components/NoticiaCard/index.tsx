import Ribbon from 'components/Ribbon'
import * as S from './styles'

export type NoticiaCardProps = {
  isNew?: boolean
  title: string
  img: string

  description: string
}

const NoticiaCard = ({ img, title, isNew, description }: NoticiaCardProps) => (
  <S.Wrapper>
    {isNew && (
      <Ribbon size="small" color="red">
        New
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Wrapper>
)

export default NoticiaCard
