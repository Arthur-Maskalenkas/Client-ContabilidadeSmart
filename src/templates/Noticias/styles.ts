import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
`

const NoticiasWrapperModifier = {
  TemplateGrid: () => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem 2rem;
  `,

  TemplateFlex: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
}

type NoticiasWrapperProps = {
  hasNotice?: boolean
}

export const NoticiasWrapper = styled.div<NoticiasWrapperProps>`
  ${({ theme, hasNotice }) => css`
    margin-top: ${theme.spacings.xxlarge};

    ${hasNotice
      ? NoticiasWrapperModifier.TemplateGrid
      : NoticiasWrapperModifier.TemplateFlex}
  `}
`

export const FiltersWrapper = styled.div`
  ${media.greaterThan('medium')`
  display: flex;
  justify-content: flex-end;`}
`

export const NotFind = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-align: center;
  `}
`
