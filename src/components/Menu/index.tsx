import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import MediaMatch from 'components/MediaWatch'
import * as S from './styles'
import NoticiaForm from 'components/NoticiaForm'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [NoticiaFormIsOpen, setNoticiaIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <p>MM</p>
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link passHref href="/">
            <S.MenuLink href="#">Inicio</S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink href="#">Sobre</S.MenuLink>
          </Link>
          <Link href="/noticias" passHref>
            <S.MenuLink href="#">Ver noticias</S.MenuLink>
          </Link>
          {!!username && (
            <S.MenuLink onClick={() => setNoticiaIsOpen(true)}>
              Criar noticias
            </S.MenuLink>
          )}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        {!username && (
          <MediaMatch greaterThan="medium">
            {/* Link */}
            <Link href="/sign-in" passHref>
              <Button as="a">Criar conta</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link passHref href="/">
            <S.MenuLink href="#">Inicio</S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink href="#">Sobre</S.MenuLink>
          </Link>
          <Link href="/noticias" passHref>
            <S.MenuLink href="#">Ver noticias</S.MenuLink>
          </Link>
          {!!username && (
            <>
              <S.MenuLink onClick={() => setNoticiaIsOpen(true)}>
                Criar noticia
              </S.MenuLink>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            {/* Link */}
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Entrar
              </Button>
            </Link>
            <span>ou</span>

            {/* Link */}
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Criar conta</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>

      {/* Ultimo modal */}
      <NoticiaForm isOpen={NoticiaFormIsOpen} setIsOpen={setNoticiaIsOpen} />
    </S.Wrapper>
  )
}

export default Menu
