import { useSelector, useDispatch } from "react-redux";
import { addTasks } from "../redux/tasksReducer/tasks";

import { useState } from "react";

const Form = () => {
    const tasks = useSelector(state => state.tasks);

    const dispatch =  useDispatch();

    const [ taskName, setTaskName ] = useState('');
    const [ taskDate, setDate ] = useState('');

    const addTodo = (e) =>{
        e.preventDefault();

       dispatch(addTasks({taskName, taskDate}))
    }

    return ( <form onSubmit={(e) => addTodo(e)} className="md:flex justify-center p-2 mt-10 gap-6">
                <input 
                    type="text"
                    className="p-3 m-1 md:m-0 w-full md:w-3/6 rounded-sm font-mono"
                    name="" 
                    id="" 
                    onChange={(e)=> setTaskName(e.target.value)}
                    placeholder="Add a new Task"
                    required
                />
                <input 
                    type='date'
                    onChange={(e)=> setDate(e.target.value)}
                    className='p-3 m-1 md:m-0 w-full md:w-2/6 rounded-sm'
                    required
                />
                <input 
                    type="submit"
                    className="align-middle bg-purple-900 text-white p-3 m-1 md:m-0  w-full md:w-1/6 rounded-sm"
                    value="Add Task" 
                />
            </form> );
}
 
export default Form;