import MediaWatch from 'components/MediaWatch'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { useState } from 'react'

import * as S from './styles'

import LinkMenuMobile from 'components/LinkMenuMobile'
import * as mockMenu from './mock'
import LinkMenuDesktop from 'components/LinkMenuDesktop'

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
          <LinkMenuDesktop title="Infoprodutores" />
          <LinkMenuDesktop {...mockMenu.DropPremiumMockDesktop} />
          <LinkMenuDesktop {...mockMenu.DropNossoTrabalhoMockDesktop} />
          <LinkMenuDesktop title="Sobre nós" />
          <LinkMenuDesktop {...mockMenu.DropBlogMockDesktop} />
          <LinkMenuDesktop title="Home" />
        </S.MenuNav>
      </MediaWatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuFullContent>
          <LinkMenuMobile title="Infoprodutores" />
          <LinkMenuMobile {...mockMenu.DropPremiumMockMobile} />
          <LinkMenuMobile {...mockMenu.DropNossoTrabalhoMockMobile} />
          <LinkMenuMobile title="Sobre nós" />
          <LinkMenuMobile {...mockMenu.DropBlogMockMobile} />
          <LinkMenuMobile title="Home" />
        </S.MenuFullContent>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
