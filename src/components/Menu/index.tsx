import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

import MediaWatch from 'components/MediaWatch'
import LinkMenuMobile from 'components/LinkMenuMobile'
import LinkMenuDesktop from 'components/LinkMenuDesktop'

type menuOptions = {
  titleOption: string
  slug: string
}

type menu = {
  title: string
  options?: menuOptions[]
}

export type MenuProps = {
  handleMenuSelect?: (value: string) => void
  menuSelects: menu[]
}

const Menu = ({ handleMenuSelect, menuSelects }: MenuProps) => {
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
          {menuSelects.map((item, index) => (
            <LinkMenuDesktop
              key={index}
              title={item.title}
              dropdownOptions={item.options}
              takeTitle={(titleCatch) => onChangeMenuSelect(titleCatch)}
              isSelected={menuSelect == item.title}
            />
          ))}
        </S.MenuNav>
      </MediaWatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuFullContent>
          {menuSelects.map((item, index) => (
            <LinkMenuMobile
              key={index}
              title={item.title}
              dropdownOptions={item.options}
            />
          ))}
        </S.MenuFullContent>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
