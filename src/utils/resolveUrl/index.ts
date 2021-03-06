const resolveBuscar = (resolveValue: string, search: string) => {
  return `/buscar?${resolveValue}=${search}`
}

const resolveArtigos = (resolveValue: string) => {
  return `/artigo/${resolveValue}`
}

const operations = {
  buscar(resolveValue: string, search: string) {
    return resolveBuscar(resolveValue, search)
  },
  artigos(resolveValue: string) {
    return resolveArtigos(resolveValue)
  }
}

type pageOptions = 'buscar' | 'artigos'

const resolveUrl = (page: pageOptions, resolveValue = '', search = '') => {
  const resolvedOperation = operations[page]

  const resolvedUrl = resolvedOperation(resolveValue, search)

  return resolvedUrl
}

export { resolveUrl }
