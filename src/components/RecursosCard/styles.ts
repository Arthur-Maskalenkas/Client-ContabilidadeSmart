import styled, { css } from 'styled-components'

import * as IconWrapperStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;

    /* ${IconWrapperStyles.wrapper} {
      transition: all 2s;
    } */

    transition: 0.6s all;

    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: 0px 0px 24px -16px #000000;

      ${IconWrapperStyles.Wrapper} {
        transform: scaleX(-1);
        filter: FlipH;
      }
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: 1.6rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
    line-height: 2.8rem;
  `}
`
