import styled, { css } from 'styled-components'

import { darken, animation } from 'polished'

import {
  InputWrapper as TextFielInputdWrapperStyle,
  Wrapper as TextFieldWrapperStyle
} from 'components/TextField/styles'
import { Wrapper as ButtonWrapperStyles } from 'components/Button/styles'

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.form<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 30rem;

    opacity: 0.8;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.green};
    padding: ${theme.spacings.xlarge};
    padding-top: ${theme.spacings.medium};
    z-index: ${theme.layers.alwaysOnTop};

    /* Tornando invisvel e não usavel */
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
  `}
`

export const TextFieldWrapper = styled.div`
  ${({ theme }) => css`
    input {
      &::placeholder {
        color: ${darken(0.3, theme.colors.green)};
      }
    }
    /* O input do componente */
    ${TextFielInputdWrapperStyle} {
      background-color: ${theme.colors.lightGreen};
      margin-top: ${theme.spacings.xxsmall};
      transition: 0.8s all;

      &:focus-within {
        box-shadow: 0 0.2rem 1rem ${theme.colors.black};
        background-color: ${darken(0.2, theme.colors.lightGreen)};
      }

      &:hover {
        transition: 0.8s all;
        background-color: ${darken(0.2, theme.colors.lightGreen)};
      }
    }

    /* O wrapper do componente */
    ${TextFieldWrapperStyle} {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const SubmitWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    transition: 0.8s all;

    ${ButtonWrapperStyles} {
      background-color: ${darken(0.1, theme.colors.green)};

      &:hover {
        transition: 0.8s all;
        background-color: ${darken(0.3, theme.colors.green)};
      }
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`
