import { resolveUrl } from '.'

describe('resolveUrl()', () => {
  describe('Vai resolver /buscar', () => {
    it('Vai resolver uma url /buscar com tag', () => {
      const urlResolved = resolveUrl('buscar', 'tags', 'tag1')

      const expectValue = '/buscar?tags=tag1'

      expect(urlResolved).toStrictEqual(expectValue)
    })

    it('Vai resolver uma url /buscar com categoria', () => {
      const urlResolved = resolveUrl('buscar', 'categorias', 'categoria1')

      const expectValue = '/buscar?categorias=categoria1'

      expect(urlResolved).toStrictEqual(expectValue)
    })
  })

  describe('Vai resolver /artigos', () => {
    it('Vai resolver uma url /artigos', () => {
      const urlResolved = resolveUrl('artigos', 'artigo1')

      const expectValue = '/artigo/artigo1'

      expect(urlResolved).toStrictEqual(expectValue)
    })
  })
})
