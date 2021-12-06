import { createSlice } from '@reduxjs/toolkit'

export const paragraphSlice = createSlice({
  name: 'paragraph',
  initialState: {
    value: 4
  },
  reducers: {
      changeParagraph: (state, action) => {
          state.value = action.payload;
      }
  }
})

export const { changeParagraph } = paragraphSlice.actions;
export const value = (state) => state.paragraph.value;
export default paragraphSlice.reducer