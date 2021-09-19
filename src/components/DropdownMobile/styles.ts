import styled, { css } from 'styled-components'

// Conforme o conteudo de wrapper vai crescendo, o <content> por ser absoluto e width: 0; ele vai acompnahando tbm

const wrapperModifiers = {
  open: () => css`
    position: relative;
    opacity: 1;
    pointer-events: auto;
    /* Falando que quando estiver aberto, ele volta a posição original */
    transform: translateY(0);
  `,
  close: () => css`
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    /* Falando que quando estiver fechado, ele vai estar 2rem para baixo */
    transform: translateY(-2rem);
  `
}

type WrapperProps = {
  isOpen?: boolean
  quantityDropdown: number
}

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, isOpen, quantityDropdown }) => css`
    position: relative;
    width: 100vw;
    ${DropdownList} {
      /* Auxiliando a transformação da propriedade transform */
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }

    /* Se ele se encontra fechado, o elemento irmão tem - 5.6 * quantidade dele */
    & + * {
      margin-top: ${quantityDropdown}rem;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
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

    transition: 0.4s all;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`
