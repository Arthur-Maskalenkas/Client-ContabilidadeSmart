import '../../../setupTests'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import Gallery from '.'

describe('<Gallery />', () => {
  it('deve testar se esta as imagens estão sendo renderizadas como botões', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(screen.getAllByAltText(/thumb - gallery image 1/i)).toHaveLength(2)
    expect(screen.getAllByAltText(/thumb - gallery image 2/i)).toHaveLength(3)
  })
})
