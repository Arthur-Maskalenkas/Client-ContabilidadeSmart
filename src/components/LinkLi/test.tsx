import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import LinkLi, { LinkLiProps } from '.'

const props: LinkLiProps = {
  title: 'Um titulo',
  path: '/tag/adsense'
}

describe('<LinkLi />', () => {
  it('should render the heading', () => {
    render(<LinkLi {...props} />)

    expect(
      screen.getByRole('listitem', {
        name: /opção um titulo/i
      })
    ).toBeInTheDocument()
  })

  it('vai renderizar em negrito ', () => {
    render(<LinkLi {...props} moreWeight />)

    const linkLi = screen.getByText(/um titulo/i)

    expect(linkLi).toHaveStyle(
      `font-weight: ${theme.font.family.poppins.weight.bold}`
    )
  })
})
