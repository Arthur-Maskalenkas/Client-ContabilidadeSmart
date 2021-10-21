import { resolvePosts } from '.'

describe('resolvePosts()', () => {
  describe('fetchmore()', () => {
    it('Vai utilizar o fetchmore somente quando a currentPage estiver igual a topPage', () => {
      const fetchMoreJest = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: fetchMoreJest,
        setTopPage: jest.fn(),
        currentPage: 3,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(fetchMoreJest).toHaveBeenCalledWith({
        variables: { limit: 3, start: 12 }
      })
    })

    it('Não vai utilizar o fetchmore caso a currentPage estiver menor que a topPage', () => {
      const fetchMoreJest = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: fetchMoreJest,
        setTopPage: jest.fn(),
        currentPage: 2,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(fetchMoreJest).not.toHaveBeenCalled()
    })

    it('NÃO vai utilizar o fetchmore caso a pagina atual seja menor que topPage', () => {
      const fetchMoreJest = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: fetchMoreJest,
        setTopPage: jest.fn(),
        currentPage: 3,
        topPage: 4,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(fetchMoreJest).not.toHaveBeenCalled()
    })
  })

  describe('setCurrentPage()', () => {
    it('Não vai mudar de pagina caso esteja na ultima pagina', () => {
      const setCurrentPage = jest.fn()

      resolvePosts({
        setCurrentPage: setCurrentPage,
        fetchMore: jest.fn(),
        setTopPage: jest.fn(),
        currentPage: 4,
        topPage: 4,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(setCurrentPage).not.toHaveBeenCalled()
    })

    it('Vai mudar de uma em uma pagina', () => {
      const setCurrentPage = jest.fn()

      resolvePosts({
        setCurrentPage: setCurrentPage,
        fetchMore: jest.fn(),
        setTopPage: jest.fn(),
        currentPage: 3,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(setCurrentPage).toHaveBeenCalledWith(3 + 1)
    })
  })

  describe('setTopPage()', () => {
    it('Vai mudar a topPage quando currentPage for igual a ele', () => {
      const setTopPage = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: jest.fn(),
        setTopPage: setTopPage,
        currentPage: 3,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(setTopPage).toHaveBeenCalled()
    })

    it('NÃO vai mudar a topPage quando currentPage for menor que topPage', () => {
      const setTopPage = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: jest.fn(),
        setTopPage: setTopPage,
        currentPage: 2,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(setTopPage).not.toHaveBeenCalled()
    })

    it('NÃO vai mudar a topPage quando currentPage for igual a lastPage', () => {
      const setTopPage = jest.fn()

      resolvePosts({
        setCurrentPage: jest.fn(),
        fetchMore: jest.fn(),
        setTopPage: setTopPage,
        currentPage: 4,
        topPage: 4,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'nextPage'
      })

      expect(setTopPage).not.toHaveBeenCalled()
    })
  })
})
