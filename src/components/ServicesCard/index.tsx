import IconsWrapper, { IconsProps, IconTypes } from 'components/IconsWrapper'
import * as S from './styles'

export type ServicesCardProps = {
  icon: IconTypes
  title: string
  description: string
}

const ServicesCard = ({ icon, description, title }: ServicesCardProps) => (
  <S.Wrapper>
    <IconsWrapper icon={icon} borderColor="secondary" size="3rem" />

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.SaibaMais>Saiba mais</S.SaibaMais>
    </S.Content>
  </S.Wrapper>
)

export default ServicesCard
