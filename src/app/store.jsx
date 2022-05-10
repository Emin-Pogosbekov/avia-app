import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filterSlice'

export default configureStore({
  reducer: {
    filterReducer,
  }
})