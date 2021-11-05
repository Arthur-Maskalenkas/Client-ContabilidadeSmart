// export const paginaSlice = createSlice({
//   name: 'pagina',
//   initialState,
//   reducers: {
//     paginaAtual: (state, action: PayloadAction<PageTypes>) => {
//       state.paginaAtual = action.payload
//     }
//   }
// })

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageTypes } from 'store/features/pagina/paginaSlice'

function mockSliceConstructor(paginaAtual: PageTypes) {
  const initialState = {
    paginaAtual: paginaAtual
  }

  const paginaSlice = createSlice({
    name: 'pagina',
    initialState,
    reducers: {
      paginaAtual: (state, action: PayloadAction<PageTypes>) => {
        state.paginaAtual = action.payload
      }
    }
  })

  return paginaSlice.reducer
}

const storePaginaCategoriasMock = configureStore({
  reducer: { paginaSlice: mockSliceConstructor('categorias') }
})

const storePaginaTagsMock = configureStore({
  reducer: { paginaSlice: mockSliceConstructor('tags') }
})

const storePaginaHomeMock = configureStore({
  reducer: { paginaSlice: mockSliceConstructor('home') }
})

const storePaginaArtigoMock = configureStore({
  reducer: { paginaSlice: mockSliceConstructor('artigo') }
})

export {
  storePaginaCategoriasMock,
  storePaginaArtigoMock,
  storePaginaTagsMock,
  storePaginaHomeMock
}
