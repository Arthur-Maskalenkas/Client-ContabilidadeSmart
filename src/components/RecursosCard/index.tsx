import Heading from 'components/Heading'
import IconsWrapper, { IconTypes } from 'components/IconsWrapper'
import * as S from './styles'

export type RecursosCardProps = {
  icon: IconTypes
  title: string
  description: string
}

const RecursosCard = ({ icon, title, description }: RecursosCardProps) => (
  <S.Wrapper>
    <IconsWrapper icon={icon} color="secondary" size="6rem" />
    <S.Content>
      <Heading size="small" lineLeft color="black">
        {title}
      </Heading>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Wrapper>
)

export default RecursosCard
