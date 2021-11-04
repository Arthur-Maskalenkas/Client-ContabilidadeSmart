import { configureStore } from '@reduxjs/toolkit'
import paginaReducer from './features/pagina/paginaSlice'

export const rootReducer = configureStore({
  reducer: {
    paginaSlice: paginaReducer
  }
})

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch
