import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import LinkLi, { LinkLiProps } from '.'

const props: LinkLiProps = {
  title: 'Um titulo',
  slug: 'Um_slug'
}

describe('<LinkLi />', () => {
  it('should render the heading', () => {
    render(<LinkLi {...props} />)

    const linkLi = screen.getByRole('link', { name: /um titulo/i })

    expect(linkLi).toHaveAttribute('href', '/posts/Um_slug')
  })

  it('vai renderizar em negrito ', () => {
    render(<LinkLi {...props} moreWeight />)

    const linkLi = screen.getByRole('link', { name: /um titulo/i })

    expect(linkLi).toHaveStyle(`font-weight: ${theme.font.family.poppins.weight.bold}`)
  })
})
