import Link from 'next/link'

import IconsWrapper, { IconTypes } from 'components/IconsWrapper'
import * as S from './styles'

export type ServicesCardProps = {
  icon: IconTypes
  title: string
  description: string
  slug: string
}

const ServicesCard = ({ icon, description, title, slug }: ServicesCardProps) => (
  <S.Wrapper>
    <IconsWrapper icon={icon} size="6rem" />

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <Link passHref href={`artigo/${slug}`}>
        <S.SaibaMais>Saiba mais</S.SaibaMais>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default ServicesCard
