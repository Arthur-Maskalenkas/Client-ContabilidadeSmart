/* eslint-disable @typescript-eslint/no-unused-vars */

export type NextPageOperationProps = Omit<ResolvePaginationProps, 'operation'>
export type BackPageOperationProps = Pick<
  ResolvePaginationProps,
  'currentPage' | 'setCurrentPage'
>

type variablesType = {
  limit?: number
  start?: number
}

type FetchMoreProps = {
  variables: variablesType
}

/**
 *
 *
 *  OperationIdentifer
 *
 *
 */
const operations = {
  nextPage({
    currentPage,
    postsLenght,
    fetchMore,
    postsPerPage,
    topPage,
    lastPage,
    setCurrentPage,
    setTopPage
  }: NextPageOperationProps) {
    currentPage == topPage &&
      topPage < lastPage &&
      fetchMore({ variables: { limit: postsPerPage, start: postsLenght } })
    currentPage == topPage && topPage < lastPage && setTopPage(currentPage + 1)
    currentPage < lastPage && setCurrentPage(currentPage + 1)
  },

  backPage({ currentPage, setCurrentPage }: BackPageOperationProps) {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }
}

/**
 *
 *
 *  Controller
 *
 *
 */
export type ResolvePaginationProps = {
  setCurrentPage: (value: number) => void
  fetchMore: ({ variables: { limit, start } }: FetchMoreProps) => void
  setTopPage: (value: number) => void
  postsLenght: number
  postsPerPage: number
  currentPage: number
  topPage: number
  lastPage: number
  operation: 'nextPage' | 'backPage'
}

export const resolvePagination = ({
  setCurrentPage,
  setTopPage,
  fetchMore,
  postsLenght,
  postsPerPage,
  currentPage,
  topPage,
  lastPage,
  operation
}: ResolvePaginationProps) => {
  const operationResolve = operations[operation]

  operationResolve({
    currentPage,
    postsPerPage,
    postsLenght,
    fetchMore,
    topPage,
    lastPage,
    setCurrentPage,
    setTopPage
  })
}
