import { render, screen } from 'utils/test-utils'

import WidgetList, { WidgetListProps } from '.'

jest.mock('components/Widget', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock widget" />
  }
}))

const props: WidgetListProps = {
  items: [
    {
      title: 'categorias',
      path: 'categorias',
      items: [
        {
          title: 'blog',
          slug: 'blog'
        },
        {
          title: 'Contabilidade',
          slug: 'contabilidade'
        }
      ]
    },
    {
      title: 'categorias',
      path: 'categorias',
      items: [
        {
          title: 'blog',
          slug: 'blog'
        },
        {
          title: 'Contabilidade',
          slug: 'contabilidade'
        }
      ]
    },
    {
      title: 'categorias',
      path: 'categorias',
      items: [
        {
          title: 'blog',
          slug: 'blog'
        },
        {
          title: 'Contabilidade',
          slug: 'contabilidade'
        }
      ]
    }
  ]
}

describe('<WidgetList />', () => {
  it('vai renderizar varios widgets', () => {
    render(<WidgetList {...props} />)

    expect(screen.getAllByTestId(/widget/i)).toHaveLength(3)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
