import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export type PageTypes = 'categorias' | 'tags' | 'home' | 'artigo'

interface PaginaState {
  paginaAtual: string
}

const initialState: PaginaState = {
  paginaAtual: 'home'
}

export const paginaSlice = createSlice({
  name: 'pagina',
  initialState,
  reducers: {
    paginaAtual: (state, action: PayloadAction<PageTypes>) => {
      state.paginaAtual = action.payload
    }
  }
})

// o reducer que vai ser utilizado para dispath
export const { paginaAtual } = paginaSlice.actions

export const selectPagina = (state: RootState) => state.paginaSlice.paginaAtual

export default paginaSlice.reducer
