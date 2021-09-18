import MediaWatch from 'components/MediaWatch'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { useState } from 'react'

import * as S from './styles'

import DropdownMobile from 'components/DropdownMobile'
import * as mockMenu from './mock'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <img src="img/index/logo.png" alt="logo Contabilidade Smart" />
      </S.LogoWrapper>

      <MediaWatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
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

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuFullContent>
          <DropdownMobile title="Infoprodutores" />
          <DropdownMobile {...mockMenu.DropPremiumMock} />
          <DropdownMobile {...mockMenu.DropNossoTrabalhoMock} />
          <DropdownMobile title="Sobre nós" />
          <DropdownMobile {...mockMenu.DropBlogMock} />
          <DropdownMobile title="Home" />
        </S.MenuFullContent>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
