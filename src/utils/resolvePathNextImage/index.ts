export const resolveCloudinaryPath = (src: string): string => {
  const path = src.split('upload/')

  return `https://res.cloudinary.com/dezwlfeyb/image/upload/${path}`
}

export const resolvePathTrue = (
  pathPossiblyNull: string,
  pathTrue: string
): string => {
  const pathIsNull = pathPossiblyNull == ''
  const pathIsString = typeof pathPossiblyNull == 'string'

  const pathIsTrue = !pathIsNull && pathIsString

  return pathIsTrue ? pathPossiblyNull : pathTrue
}
