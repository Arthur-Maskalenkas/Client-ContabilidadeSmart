import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
}

export const parseQueryStringToWhere = ({ queryString }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  // queryString = {platforms: ['windows','linux']}
  // filterItems = {name: 'platforms', type: 'checkbox'}
  Object.keys(queryString).forEach((key) => {
    // Pegando o valor e colocando dentro do objeto
    obj[key] = { slug_contains: queryString[key] }
  })

  return obj
}
