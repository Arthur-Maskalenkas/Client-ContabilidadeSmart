import { configureStore } from '@reduxjs/toolkit'

import paginaReducer from './features/pagina/paginaSlice'
import slugReducer from './features/slug/slugSlice'

export const rootReducer = configureStore({
  reducer: {
    paginaSlice: paginaReducer,
    slugSlice: slugReducer
  }
})

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch
