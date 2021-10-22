import { render, screen } from 'utils/test-utils'

import Tags, { TagsProps } from '.'

const props: TagsProps = {
  items: [
    {
      title: 'ads',
      slug: 'ads',
      posts: [{ id: '1' }]
    },
    {
      title: 'adsense',
      slug: 'adsense',
      posts: [{ id: '1' }]
    }
  ]
}

describe('<Tags />', () => {
  it('Vai renderizar o componente', () => {
    render(<Tags {...props} />)

    expect(screen.getByRole('link', { name: /adsense/i })).toHaveAttribute(
      'href',
      '/buscar?tags=adsense'
    )

    expect(
      screen.getByRole('listitem', {
        name: /opção de tag adsense/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()

    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
