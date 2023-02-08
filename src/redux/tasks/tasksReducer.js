import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks : (state, action) =>{
        state.push(action.payload);
    },
    editTask: () =>{

    },
    removeTask: () =>{

    }
  },
})

export const {  } = tasksSlice.actions

export default tasksSlice.reducer