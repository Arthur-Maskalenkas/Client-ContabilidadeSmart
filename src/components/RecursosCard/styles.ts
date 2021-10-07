import styled, { css } from 'styled-components'

import * as IconWrapperStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;

    padding: ${theme.spacings.small};
    cursor: pointer;

    transition: 0.6s all;

    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.card};

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
