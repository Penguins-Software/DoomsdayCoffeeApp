import { createSlice } from '@reduxjs/toolkit'
export const itemSlice = createSlice({
    name: 'item',
    initialState: {
      value: []
    },
    reducers: {
      add: (state, action) => {
        state.value.push(action.payload)
      },
      reset: state => {
        state.value = []
      },
      remove: (state, action) => {
        state.value = state.value.filter((item, index) => index !== action.payload)
      },
    }
  })
  
  export const { add, reset, remove } = itemSlice.actions
  
  export default itemSlice.reducer

  export const selectItem = state => state.item.value