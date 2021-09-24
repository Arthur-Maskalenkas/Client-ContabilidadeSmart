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
})
