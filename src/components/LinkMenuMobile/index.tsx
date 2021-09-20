import * as S from './styles'

import { ArrowRight } from '@styled-icons/fa-solid'
import { AnchorHTMLAttributes, useState } from 'react'

type dropDownTypes = {
  title: string
  link: string
}

export type LinkMenuMobileProps = {
  dropdownOptions?: dropDownTypes[]
  title: string
  titleLink?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkMenuMobile = ({ dropdownOptions, title, titleLink }: LinkMenuMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasDropdown = !!dropdownOptions

  // Tamanho de cada menu (56px)
  // Vai modificar o elemento irmão, tendo 5.6 * a quantidade de opções dele
  const itemsDropdownHeight = dropdownOptions && dropdownOptions?.length * -5.6

  const timeToDownItemsMenu = (dropdownOptions?.length || 1) > 4 ? 0.4 : 0.5

  return (
    <S.Wrapper
      as={hasDropdown ? 'ul' : 'li'}
      isOpen={isOpen}
      itemsDropdownHeight={itemsDropdownHeight as number}
      timeToDownItemsMenu={timeToDownItemsMenu as number}
    >
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        {hasDropdown ? (
          <>
            <S.Title>{title}</S.Title>
            <ArrowRight />
          </>
        ) : (
          <S.Title href={titleLink} as="a" role="link">
            {title}
          </S.Title>
        )}
      </S.TitleWrapper>

      {hasDropdown && (
        <S.DropdownList aria-hidden={!isOpen} aria-label="dropdown">
          {dropdownOptions!.map((item, index) => (
            <S.DropdownItemWrapper key={index}>
              <S.DropdownItem>{item.title}</S.DropdownItem>
            </S.DropdownItemWrapper>
          ))}
        </S.DropdownList>
      )}
    </S.Wrapper>
  )
}

export default LinkMenuMobile
