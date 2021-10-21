export const operations = {
  nextPage: nextPageOperation(),
  backPage: backPageOperation()
}

type variablesType = {
  limit?: number
  start?: number
}

export type FetchMoreProps = {
  variables: variablesType
}
