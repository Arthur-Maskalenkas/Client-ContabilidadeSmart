import styled, { css } from 'styled-components'

import { Container } from 'components/Container'
import media from 'styled-media-query'

export const Wrapper = styled.main``

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2)
    `}
  `}
`

export const ServicesSection = styled(Section)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};

    & > ${Description} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.light};
  `}
`

export const RecursosSection = styled.section`
  ${({ theme }) => css`
    padding: 10rem 0;
    background-color: ${theme.colors.lightGray};

    & ${Description} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const SocialBannerSection = styled.section`
  ${({ theme }) => css`
    padding: 10rem 0;
    margin-bottom: calc(${theme.spacings.xlarge} * 2);
    /* background by SVGBackgrounds.com */
    background-image: url('img/backgrounds/pattern-randomized.svg');
    & ${Description} {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const WidgetSection = styled(Section)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    & > * {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(25.5rem, 1fr));

    & > * {
      margin-bottom: none;
    }

    `}
  `}
`
