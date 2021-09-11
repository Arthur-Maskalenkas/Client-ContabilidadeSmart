import { Container } from 'components/Container'

import NoticiaCard, { NoticiaCardProps } from 'components/NoticiaCard'
import TextField from 'components/TextField'

import Base from 'templates/Base'
import * as S from './styles'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

export type NoticiasTemplateProps = {
  NoticiaCardContainer?: NoticiaCardProps[]
}

const Noticias = ({ NoticiaCardContainer = [] }: NoticiasTemplateProps) => (
  <Base>
    <Container>
      <S.Wrapper>
        <S.FiltersWrapper>
          <TextField icon={<SearchIcon />} />
        </S.FiltersWrapper>

        <S.NoticiasWrapper
          hasNotice={!!NoticiaCardContainer.length}
          aria-label="Area de noticia"
        >
          {NoticiaCardContainer.length ? (
            NoticiaCardContainer?.map((noticia: NoticiaCardProps) => (
              <NoticiaCard key={noticia.title} {...noticia} />
            ))
          ) : (
            <S.NotFind>Opa... parece que não foi encontrado nada ;(</S.NotFind>
          )}
        </S.NoticiasWrapper>
      </S.Wrapper>
    </Container>
  </Base>
)

export default Noticias
