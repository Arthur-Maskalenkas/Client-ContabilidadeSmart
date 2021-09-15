import MediaWatch from 'components/MediaWatch'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import { useState } from 'react'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <img src="img/index/logo.png" alt="logo Contabilidade Smart" />
      </S.LogoWrapper>

      <MediaWatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaWatch>

      <MediaWatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink>Infoprodutores</S.MenuLink>
          <S.MenuLink>Premium</S.MenuLink>
          <S.MenuLink>Nosso trabalho</S.MenuLink>
          <S.MenuLink>Sobre nós</S.MenuLink>
          <S.MenuLink>Blog</S.MenuLink>
          <S.MenuLink>Home</S.MenuLink>
        </S.MenuNav>
      </MediaWatch>
    </S.Wrapper>
  )
}
export default Menu
