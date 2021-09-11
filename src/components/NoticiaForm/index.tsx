import Button from 'components/Button'
import TextField from 'components/TextField'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

type NoticiaFormProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const NoticiaForm = ({ isOpen, setIsOpen }: NoticiaFormProps) => {
  return (
    <S.Wrapper
      aria-hidden={!isOpen}
      isOpen={isOpen}
      role="form"
      aria-label="modal de criar noticia"
    >
      <CloseIcon
        aria-label="Fechar NoticiaForm"
        onClick={() => setIsOpen(false)}
      />
      <S.Title>Criar noticia</S.Title>
      <S.TextFieldWrapper>
        <TextField
          label="titulo"
          labelFor="titulo"
          id="titulo"
          placeholder="Titulo"
        />
        <TextField
          label="descrição"
          labelFor="detalhes"
          id="detalhes"
          placeholder="Descrição"
        />
      </S.TextFieldWrapper>

      <S.SubmitWrapper>
        <Button>Criar</Button>
      </S.SubmitWrapper>
    </S.Wrapper>
  )
}

export default NoticiaForm
