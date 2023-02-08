import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksReducer/tasks'

export const store = configureStore({
  reducer: {
      tasks: tasksReducer
  },
})