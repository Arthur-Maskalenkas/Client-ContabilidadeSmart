import styled, { css, DefaultTheme } from 'styled-components'

// A lista sempre existe, o que eu faço é colocar como opacity 0 a lista e jogar o elemento adjacente (no caso o proximo wrapper) para cima com margin-top: -numero

type ColorTypes = 'secondary' | 'black'

const wrapperModifiers = {
  open: () => css`
    ${DropdownList} {
      opacity: 1;
      pointer-events: auto;
      /* Falando que quando estiver aberto, ele volta a posição original */
      transform: translateX(0);
    }
  `,
  close: () => css`
    ${DropdownList} {
      width: 100vw;
      opacity: 0;
      pointer-events: none;
      /* Falando que quando estiver fechado, ele vai estar 2rem para baixo */
      transform: translateX(-15rem);
      transition: transform 0.7s, 0.2s opacity;
    }
  `,
  moveParentUp: (itemsDropdownHeight: number) => css`
    & + * {
      margin-top: ${itemsDropdownHeight}rem;
    }
    svg {
      animation: ArrowToRight 1s;
    }
    @keyframes ArrowToRight {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `,
  moveParentDown: (itemsDropdownHeight: number) => css`
    & + * {
      margin-top: + ${itemsDropdownHeight}rem;
    }
    svg {
      animation: ArrowToDown 1s;
      animation-fill-mode: both;
    }
    @keyframes ArrowToDown {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
  `,
  modifierColorTitle: (theme: DefaultTheme, color: ColorTypes) => css`
    ${Title} {
      color: ${theme.colors[color]};
    }
  `,

  dropdownIsOpen: (theme: DefaultTheme, itemsDropdownHeight: number) => css`
    ${wrapperModifiers.modifierColorTitle(theme, 'secondary')}
    /* Modificando a abertura dos menus (premium -> aceledora | bpo financeiro) */
    ${wrapperModifiers.moveParentDown(itemsDropdownHeight)}
      /* MOdificando a transição DO MENU (premium, nosso trabalho.. */
    ${wrapperModifiers.open()}
  `,
  dropdownIsClose: (theme: DefaultTheme, itemsDropdownHeight: number) => css`
    ${wrapperModifiers.modifierColorTitle(theme, 'black')}
    ${wrapperModifiers.moveParentUp(itemsDropdownHeight)}
    ${wrapperModifiers.close()}
  `
}

type WrapperProps = {
  isOpen?: boolean
  itemsDropdownHeight: number
  timeToDownItemsMenu: number
}

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, isOpen, itemsDropdownHeight, timeToDownItemsMenu }) => css`
    position: relative;
    list-style: none;
    width: 100vw;

    transition: ${`${timeToDownItemsMenu}s`} all;
    ${DropdownList} {
      transition: transform 0.7s, opacity 1.9s;
    }

    /* Funções Controllers*/
    ${isOpen && wrapperModifiers.dropdownIsOpen(theme, itemsDropdownHeight)}
    ${!isOpen && wrapperModifiers.dropdownIsClose(theme, itemsDropdownHeight)}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray};
    svg {
      color: ${theme.colors.secondary};
      width: 2.5rem;
    }
  `}
`

export const DropdownList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const DropdownItemWrapper = styled.li`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const DropdownItem = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    line-height: 5.5rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
    margin-left: ${theme.spacings.medium};
    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`
