import { resolvePagination } from '.'

describe('resolvePagination()', () => {
  describe('NextPageOperation', () => {
    describe('fetchmore()', () => {
      it('Vai utilizar o fetchmore somente quando a currentPage estiver igual a topPage', () => {
        const fetchMoreJest = jest.fn()

        resolvePagination({
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

      it('NÃO vai utilizar o fetchmore quando currentPage,topPage e lastPage estiverem iguais', () => {
        const fetchMoreJest = jest.fn()

        resolvePagination({
          setCurrentPage: jest.fn(),
          fetchMore: fetchMoreJest,
          setTopPage: jest.fn(),
          currentPage: 4,
          topPage: 4,
          lastPage: 4,
          postsPerPage: 3,
          postsLenght: 12,
          operation: 'nextPage'
        })

        expect(fetchMoreJest).not.toHaveBeenCalled()
      })

      it('Não vai utilizar o fetchmore caso a currentPage estiver menor que a topPage', () => {
        const fetchMoreJest = jest.fn()

        resolvePagination({
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

        resolvePagination({
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
        const setCurrentPageJest = jest.fn()

        resolvePagination({
          setCurrentPage: setCurrentPageJest,
          fetchMore: jest.fn(),
          setTopPage: jest.fn(),
          currentPage: 4,
          topPage: 4,
          lastPage: 4,
          postsPerPage: 3,
          postsLenght: 12,
          operation: 'nextPage'
        })

        expect(setCurrentPageJest).not.toHaveBeenCalled()
      })

      it('Vai mudar de uma em uma pagina', () => {
        const setCurrentPageJest = jest.fn()

        resolvePagination({
          setCurrentPage: setCurrentPageJest,
          fetchMore: jest.fn(),
          setTopPage: jest.fn(),
          currentPage: 3,
          topPage: 3,
          lastPage: 4,
          postsPerPage: 3,
          postsLenght: 12,
          operation: 'nextPage'
        })

        expect(setCurrentPageJest).toHaveBeenCalledWith(3 + 1)
      })
    })

    describe('setTopPage()', () => {
      it('Vai mudar a topPage quando currentPage for igual a ele', () => {
        const setTopPage = jest.fn()

        resolvePagination({
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
        const setTopPageJest = jest.fn()

        resolvePagination({
          setCurrentPage: jest.fn(),
          fetchMore: jest.fn(),
          setTopPage: setTopPageJest,
          currentPage: 2,
          topPage: 3,
          lastPage: 4,
          postsPerPage: 3,
          postsLenght: 12,
          operation: 'nextPage'
        })

        expect(setTopPageJest).not.toHaveBeenCalled()
      })

      it('NÃO vai mudar a topPage quando currentPage for igual a lastPage', () => {
        const setTopPageJest = jest.fn()

        resolvePagination({
          setCurrentPage: jest.fn(),
          fetchMore: jest.fn(),
          setTopPage: setTopPageJest,
          currentPage: 4,
          topPage: 4,
          lastPage: 4,
          postsPerPage: 3,
          postsLenght: 12,
          operation: 'nextPage'
        })

        expect(setTopPageJest).not.toHaveBeenCalled()
      })
    })
  })

  describe('BackPageOperation', () => {
    it('vai voltar uma pagina', () => {
      const setCurrentPageJest = jest.fn()

      resolvePagination({
        setCurrentPage: setCurrentPageJest,
        fetchMore: jest.fn(),
        setTopPage: jest.fn(),
        currentPage: 2,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'backPage'
      })

      expect(setCurrentPageJest).toHaveBeenCalledWith(2 - 1)
    })

    it('NÃO vai voltar uma pagina se a currentPage for igual a 0', () => {
      const setCurrentPageJest = jest.fn()

      resolvePagination({
        setCurrentPage: setCurrentPageJest,
        fetchMore: jest.fn(),
        setTopPage: jest.fn(),
        currentPage: 1,
        topPage: 3,
        lastPage: 4,
        postsPerPage: 3,
        postsLenght: 12,
        operation: 'backPage'
      })

      expect(setCurrentPageJest).not.toHaveBeenCalled()
    })
  })
})
