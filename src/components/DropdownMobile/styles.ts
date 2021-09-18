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
    opacity: 0;
    pointer-events: none;
    /* Falando que quando estiver fechado, ele vai estar 2rem para baixo */
    transform: translateY(-2rem);
  `
}

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: 100vw;

    ${DropdownList} {
      /* Auxiliando a transformação da propriedade transform */
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-left: ${theme.spacings.xsmall};
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.black};
    line-height: 5.5rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.normal};
    display: flex;
    padding-right: 2.4rem;
  `}
`

export const DropdownList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    & > :first-child {
      border-top: 1px solid ${theme.colors.gray};
    }

    & > ${DropdownItemWrapper} {
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`

export const DropdownItemWrapper = styled.li``

export const DropdownItem = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    line-height: 5.5rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
    margin-left: ${theme.spacings.small};

    transition: 0.4s all;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`
