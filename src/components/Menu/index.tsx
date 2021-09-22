import MediaWatch from 'components/MediaWatch'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { useState } from 'react'

import * as S from './styles'

// Vai passar o menuselect para o linkmenudesktop, e la ele vai tratar

import LinkMenuMobile from 'components/LinkMenuMobile'
import * as mockMenu from './mock'
import LinkMenuDesktop from 'components/LinkMenuDesktop'

type MenuProps = {
  handleMenuSelect?: (value: string) => void
}

const Menu = ({ handleMenuSelect }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuSelect, setMenuSelect] = useState<string>('')

  const onChangeMenuSelect = (titleCatch: string) => {
    const noIsNew = menuSelect == titleCatch

    noIsNew ? setMenuSelect('') : setMenuSelect(titleCatch)

    if (handleMenuSelect) {
      handleMenuSelect(noIsNew ? '' : titleCatch)
    }
  }

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
          <LinkMenuDesktop
            title="Infoprodutores"
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Infoprodutores'}
          />

          <LinkMenuDesktop
            {...mockMenu.DropPremiumMockDesktop}
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Premium'}
          />
          <LinkMenuDesktop
            {...mockMenu.DropNossoTrabalhoMockDesktop}
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Nosso Trabalho'}
          />
          <LinkMenuDesktop
            title="Sobre nós"
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Sobre nós'}
          />
          <LinkMenuDesktop
            {...mockMenu.DropBlogMockDesktop}
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Blog'}
          />
          <LinkMenuDesktop
            title="Home"
            slug="Home"
            takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
            isSelected={menuSelect == 'Home'}
          />
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
