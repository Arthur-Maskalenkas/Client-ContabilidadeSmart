import { render, screen } from 'utils/test-utils'

import BuscarPostLoading from '.'

describe('<BuscarPostLoading />', () => {
  it('vai renderizar o componente 1x', () => {
    const { container } = render(<BuscarPostLoading />)

    expect(container).toMatchInlineSnapshot(`
.c0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.c1 {
  position: relative;
  height: 63.8rem;
  -webkit-animation-name: flash;
  animation-name: flash;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #8F8F8F;
}

<div>
  <div
    class="c0"
  >
    <div
      aria-label="Loading..."
      class="c1"
    />
  </div>
</div>
`)
  })

  it('vai renderizar o componente 3x', () => {
    render(<BuscarPostLoading items={3} />)

    expect(screen.getAllByLabelText(/loading.../i)).toHaveLength(3)
  })
})
