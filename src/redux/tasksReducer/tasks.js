import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks : (state, action) =>{
      const taskIndex = state.tasks.findIndex(task => task.taskName === action.payload.taskName);

      if(taskIndex >= 0){
        toast.error("Task Already Exists", {
            position: 'top-right'
        })
      }else{
          state.tasks.push(action.payload);
          toast.success("Task Added", {
              position: 'top-right'
          })

          localStorage.setItem("tasks", JSON.stringify(state.tasks))
      }
    },
    removeTask: (state, action) =>{
        const newTasks = state.tasks.filter(task => 
          task.taskName !== action.payload.taskName
        )

        state.tasks = newTasks;

        localStorage.setItem("tasks", JSON.stringify(state.tasks));

        toast.error("Task Deleted",{
          position:'top-right'
        })
    }
  },
})

export const { addTasks, removeTask } = tasksSlice.actions

export default tasksSlice.reducer