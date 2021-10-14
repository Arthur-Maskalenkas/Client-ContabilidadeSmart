import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

import MediaWatch from 'components/MediaWatch'
import LinkMenuMobile from 'components/LinkMenuMobile'
import LinkMenuDesktop from 'components/LinkMenuDesktop'
import Logo from 'components/Logo'

type menuOptions = {
  titleOption: string
  slug: string
}

export type MenuUnitaryProps = {
  title: string
  slug?: string
  dropdownOptions?: menuOptions[]
}

export type MenuProps = {
  items: MenuUnitaryProps[]
}

const Menu = ({ items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <Logo size="smallNegativo" />

      <MediaWatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaWatch>

      <MediaWatch greaterThan="large">
        <S.MenuNav>
          {items.map((item, index) => (
            <LinkMenuDesktop
              key={index}
              title={item.title}
              dropdownOptions={item.dropdownOptions}
            />
          ))}
        </S.MenuNav>
      </MediaWatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuFullContent>
          {items.map((item, index) => (
            <LinkMenuMobile
              key={index}
              title={item.title}
              dropdownOptions={item.dropdownOptions}
            />
          ))}
        </S.MenuFullContent>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
