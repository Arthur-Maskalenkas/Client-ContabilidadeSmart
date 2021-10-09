import { render, screen } from 'utils/test-utils'

import Tags, { TagsProps } from '.'

const props: TagsProps = {
  items: [
    {
      title: 'ads',
      slug: 'ads'
    },
    {
      title: 'adsense',
      slug: 'adsense'
    }
  ]
}

describe('<Tags />', () => {
  it('Vai renderizar o componente', () => {
    render(<Tags {...props} />)

    expect(screen.getByRole('link', { name: /adsense/i })).toHaveAttribute(
      'href',
      '/tag/adsense'
    )

    expect(
      screen.getByRole('listitem', { name: /opção de tag adsense/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()

    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
