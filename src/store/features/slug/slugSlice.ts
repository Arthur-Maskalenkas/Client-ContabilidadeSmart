import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SlugState {
  slugAtual: string
}

const initialState: SlugState = {
  slugAtual: ''
}

export const slugSlice = createSlice({
  name: 'slug',
  initialState,
  reducers: {
    slugAtual: (state, action: PayloadAction<string>) => {
      state.slugAtual = action.payload
    }
  }
})

// o reducer que vai ser utilizado para dispath
export const { slugAtual } = slugSlice.actions

export default slugSlice.reducer
