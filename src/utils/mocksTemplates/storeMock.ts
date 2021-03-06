import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageTypes } from 'store/features/pagina/paginaSlice'

function mockSlugSliceConstructor() {
  const initialStateSlug = {
    slugAtual: 'teste'
  }

  const slugSlice = createSlice({
    name: 'slug',
    initialState: initialStateSlug,
    reducers: {
      slugAtual: (state, action: PayloadAction<string>) => {
        state.slugAtual = action.payload
      }
    }
  })

  return slugSlice.reducer
}

function mockPaginaSliceConstructor(paginaAtual: PageTypes) {
  const initialStatePagina = {
    paginaAtual: paginaAtual
  }

  const paginaSlice = createSlice({
    name: 'pagina',
    initialState: initialStatePagina,
    reducers: {
      paginaAtual: (state, action: PayloadAction<PageTypes>) => {
        state.paginaAtual = action.payload
      }
    }
  })

  return paginaSlice.reducer
}

export const mockStoreDefault = configureStore({
  reducer: {
    paginaSlice: mockPaginaSliceConstructor('home'),
    slugSlice: mockSlugSliceConstructor()
  }
})
