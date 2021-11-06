import Link from 'next/link'

import * as S from './styles'

import { Linkedin, Whatsapp, Instagram } from '@styled-icons/bootstrap'
import { LINK_SITE } from 'utils/globalVars'

const Footer = () => (
  <S.Wrapper>
    <S.ListIcons>
      <li aria-label="Linkedin">
        <Link href={LINK_SITE} passHref>
          <S.IconWrapper>
            <Linkedin role="svg" />
          </S.IconWrapper>
        </Link>
      </li>
      <li aria-label="Instagram">
        <Link href={LINK_SITE} passHref>
          <S.IconWrapper>
            <Instagram role="svg" />
          </S.IconWrapper>
        </Link>
      </li>
      <li aria-label="Whatsapp">
        <Link href={LINK_SITE} passHref>
          <S.IconWrapper>
            <Whatsapp role="svg" />
          </S.IconWrapper>
        </Link>
      </li>
    </S.ListIcons>
    <S.DetailsWrapper>
      <S.Details>Nós somos a Criatividade Contábil</S.Details>
      <S.Details>Politicas de Privacidade</S.Details>
      <S.Copyright>© 2021 Contabilidade Smart</S.Copyright>
    </S.DetailsWrapper>
  </S.Wrapper>
)

export default Footer
