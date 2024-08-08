import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeTextFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeTextFilter } = filterSlice.actions;

export default filterSlice.reducer;
