import { parseQueryStringToWhere } from '.'

const queryString = {
  tag: 'teste'
}

// Vai retornar para o Graphql
describe('parseQueryStringToWhere()', () => {
  it('vai receber a queryString e vai formatar para o "where"', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString })

    expect(parsedQuery).toStrictEqual({
      tag: { title_contains: 'teste' }
    })
  })
})
