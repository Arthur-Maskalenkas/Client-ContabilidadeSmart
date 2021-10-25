import IconsWrapper from 'components/IconsWrapper'
import * as S from './styles'

export type BuscarButtonProps = {
  icon: 'NavigateNext' | 'NavigateBefore'
  currentPage: number
  lastPage: number
}

type NextButtonProps = Pick<BuscarButtonProps, 'currentPage' | 'lastPage'>
type BeforeButtonProps = Pick<BuscarButtonProps, 'currentPage'>

const BuscarButton = ({ icon, currentPage, lastPage }: BuscarButtonProps) => {
  const pageIsEqualALastPage = (currentPage: number, lastPage: number) =>
    currentPage == lastPage

  const pageIsEqualAFirstPage = (currentPage: number) => currentPage === 1

  const haveMorePage = (lastPage: number) => lastPage > 1

  const navigateNextVerification = ({
    currentPage,
    lastPage
  }: NextButtonProps) => {
    const firstCheck = pageIsEqualALastPage(currentPage, lastPage)

    const navigateNextIsDisabled = firstCheck

    return navigateNextIsDisabled
  }

  const navigateBeforeVerification = ({ currentPage }: BeforeButtonProps) => {
    const firstCheck = pageIsEqualAFirstPage(currentPage)

    const navigateBeforeIsDisabled = firstCheck
    return navigateBeforeIsDisabled
  }

  const conditions = {
    NavigateNext({ currentPage, lastPage }: NextButtonProps) {
      const isDisabled = navigateNextVerification({ currentPage, lastPage })

      return isDisabled
    },
    NavigateBefore({ currentPage }: BeforeButtonProps) {
      const isDisabled = navigateBeforeVerification({ currentPage })

      return isDisabled
    }
  }

  const conditionResolve = conditions[icon]
  const conditionResolved = !conditionResolve({ currentPage, lastPage })

  const haveMorePageResolved = haveMorePage(lastPage)

  const ariaLabelResolved =
    icon == 'NavigateNext' ? 'Proxima pagina' : 'Pagina anterior'

  return (
    <S.Wrapper
      aria-label={ariaLabelResolved}
      disabled={!conditionResolved}
      haveMorePage={haveMorePageResolved}
    >
      <IconsWrapper icon={icon} />
    </S.Wrapper>
  )
}

export default BuscarButton
