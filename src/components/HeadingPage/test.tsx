import { render, screen } from 'utils/test-utils'

import HeadingPage, { HeadingPageProps } from '.'

const props: HeadingPageProps = { title: 'Um titulo' }

describe('<HeadingPage />', () => {
  it('vai renderizar o componente', () => {
    const { container } = render(<HeadingPage {...props} />)

    expect(screen.getByRole('heading', { name: /Um titulo/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
