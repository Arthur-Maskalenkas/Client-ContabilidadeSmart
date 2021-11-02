import { resolveCloudinaryPath, resolvePathTrue } from '.'

describe('resolveCloudinaryPath()', () => {
  it('vai receber apenas o path e devolver tudo', () => {
    const path =
      'v1634168632/small_Contabilidade_Rural_votuporanga_9ee2dd6a21.jpg'

    const pathResolved = resolveCloudinaryPath(path)

    expect(pathResolved).toStrictEqual(
      'https://res.cloudinary.com/dezwlfeyb/image/upload/v1634168632/small_Contabilidade_Rural_votuporanga_9ee2dd6a21.jpg'
    )
  })
})

describe('resolvePathTrue()', () => {
  it('vai receber um path falso e retornar o path verdadeiro', () => {
    const pathTrue = 'public/teste'
    const pathPossiblyNull = ''

    const resolvedPathTrue = resolvePathTrue(pathPossiblyNull, pathTrue)

    expect(resolvedPathTrue).toStrictEqual('public/teste')
  })

  it('vai receber um path verdadeiro e vai retornar ele', () => {
    const pathTrue = 'public/teste'
    const pathPossiblyNull = 'public/teste/teste'

    const resolvedPathTrue = resolvePathTrue(pathPossiblyNull, pathTrue)

    expect(resolvedPathTrue).toStrictEqual('public/teste/teste')
  })
})
// https://res.cloudinary.com/dezwlfeyb/image/upload/v1634168632/small_Contabilidade_Rural_votuporanga_9ee2dd6a21.jpg
// https://res.cloudinary.com/dezwlfeyb/image/upload/v1634168627/thumbnail_Contabilidade_Rural_votuporanga_9ee2dd6a21.jpg
