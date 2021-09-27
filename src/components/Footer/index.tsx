import * as S from './styles'

import { Instagram, Whatsapp } from '@styled-icons/bootstrap/'
import { Gmail } from '@styled-icons/simple-icons/Gmail'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

const Footer = () => (
  <S.Wrapper>
    <S.IconWrapper colorPadding="#2772B1">
      <Linkedin title="Linkedin" role="svg" />
    </S.IconWrapper>
    <S.IconWrapper colorPadding="#CE0791">
      <Instagram title="Instagram" role="svg" />
    </S.IconWrapper>
    <S.IconWrapper colorPadding="#3BC82B">
      <Whatsapp title="whatsapp" role="svg" />
    </S.IconWrapper>
    <S.IconWrapper colorPadding="#EF3A2A">
      <Gmail title="Gmail" role="svg" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default Footer
