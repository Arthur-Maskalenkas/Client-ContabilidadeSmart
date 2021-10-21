/* eslint-disable @typescript-eslint/no-unused-vars */

export type NextPageOperationProps = Omit<ResolvePostsProps, 'operation'>
export type BackPageOperationProps = Pick<
  ResolvePostsProps,
  'currentPage' | 'setCurrentPage'
>

/**
 *
 *
 *  Operations
 *
 *
 */
const nextPageOperation = ({
  fetchMore,
  postsPerPage,
  postsLenght,
  topPage,
  currentPage,
  lastPage,
  setCurrentPage,
  setTopPage
}: NextPageOperationProps) => {
  currentPage == topPage &&
    fetchMore({ variables: { limit: postsPerPage, start: postsLenght } })
  currentPage == topPage && topPage < lastPage && setTopPage(currentPage + 1)
  currentPage < lastPage && setCurrentPage(currentPage + 1)
}

const backPageOperation = ({
  currentPage,
  setCurrentPage
}: BackPageOperationProps) => {
  currentPage > 0 && setCurrentPage(currentPage - 1)
}

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
    nextPageOperation({
      currentPage,
      fetchMore,
      postsLenght,
      postsPerPage,
      topPage,
      lastPage,
      setCurrentPage,
      setTopPage
    })
  },

  backPage({ currentPage, setCurrentPage }: BackPageOperationProps) {
    backPageOperation({
      currentPage,
      setCurrentPage
    })
  }
}

/**
 *
 *
 *  Controller
 *
 *
 */
export type ResolvePostsProps = {
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

export const resolvePosts = ({
  setCurrentPage,
  setTopPage,
  fetchMore,
  postsLenght,
  postsPerPage,
  currentPage,
  topPage,
  lastPage,
  operation
}: ResolvePostsProps) => {
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
