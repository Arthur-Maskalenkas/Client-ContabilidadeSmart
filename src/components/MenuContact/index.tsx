import * as S from './styles'

import { Instagram, Whatsapp } from '@styled-icons/bootstrap/'
import { Gmail } from '@styled-icons/simple-icons/Gmail'
import { Container } from 'components/Container'

const MenuContact = () => (
  <S.Wrapper>
    <Container>
      <S.WrapperContent>
        <S.ContactInfoWrapper>
          <S.IconWrapper>
            <Whatsapp title="whatsapp" role="svg" />
          </S.IconWrapper>
          <S.ContactInfo>+55 17 99146-0296</S.ContactInfo>
        </S.ContactInfoWrapper>

        <S.ContactInfoWrapper>
          <S.IconWrapper>
            <Gmail title="Gmail" role="svg" />
          </S.IconWrapper>
          <S.ContactInfo>contato@contabilidadesmart.com.br</S.ContactInfo>
        </S.ContactInfoWrapper>

        <S.ContactInfoWrapper>
          <S.IconWrapper>
            <Instagram title="Instagram" role="svg" />
          </S.IconWrapper>
          <S.ContactInfo>@contabilidadesmart</S.ContactInfo>
        </S.ContactInfoWrapper>
      </S.WrapperContent>
    </Container>
  </S.Wrapper>
)

export default MenuContact
