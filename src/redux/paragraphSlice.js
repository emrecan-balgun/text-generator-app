import { createSlice } from '@reduxjs/toolkit'

export const paragraphSlice = createSlice({
  name: 'paragraph',
  initialState: {
    value: 4,
    includeHTML: 'no',
  },
  reducers: {
      changeParagraph: (state, action) => {
          state.value = action.payload;
      },
      changeIncludeHTML: (state, action) => {
          state.includeHTML = action.payload;
      }
  }
})

export const { changeParagraph, changeIncludeHTML } = paragraphSlice.actions;
export const value = (state) => state.paragraph.value;
export const includeHTML = (state) => state.paragraph.includeHTML;
export default paragraphSlice.reducer