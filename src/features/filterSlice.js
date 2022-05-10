import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    choosenFilter: { asc: true, desc: false, price: false },
    sort: { singleTransfer: false, noTransfer: false },
    price: { from: 0, to: 0 },
    brand: { polishAirlines: false, aeroflotAirlines: false }
  },
  reducers: {
    choose: (state, action) => {
      for (let key in state.choosenFilter) {
        if (key === action.payload) {
          state.choosenFilter[key] = true
        } else {
          state.choosenFilter[key] = false
        }
      }
    },
    sortBy: (state, action) => {
      for (let key in state.sort) {
        if (key === action.payload) {
          state.sort[key] = state.sort[key] ? false : true
        }
      }
    },
    handleInput: (state, action) => {
      state.price[action.payload.name] = action.payload.value
    },
    sortBrandsBy: (state, action) => {
      for (let key in state.brand) {
        if (key === action.payload) {
          state.brand[key] = state.brand[key] ? false : true
        }
      }
    }
  }
})

export const { choose, sortBy, handleInput, sortBrandsBy } = filterSlice.actions

export default filterSlice.reducer