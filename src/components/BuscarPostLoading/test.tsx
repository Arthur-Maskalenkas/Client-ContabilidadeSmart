import { render } from 'utils/test-utils'

import BuscarPostLoading from '.'

describe('<BuscarPostLoading />', () => {
  it('should render the heading', () => {
    const { container } = render(<BuscarPostLoading items={1} />)

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
  height: 45rem;
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
      class="c1"
    />
  </div>
</div>
`)
  })
})
