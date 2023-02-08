import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/tasksReducer/tasks';

const Tasks = () => {
    const tasks = useSelector(state => state.tasks);

    const count = tasks.tasks.length;
    const dispatch = useDispatch();

    const handleRemove = (task) =>{
        dispatch(removeTask(task))
    }

    return ( <div className="flex justify-center">
        <div className="hidden md:w-2/6"></div>
        <div className="w-full m-1 md:w-3/6 backdrop-blur-sm bg-white/30 rounded-md p-2 md:p-5 mt-2">
            <h1 className='p-3 text-lg'>Tasks({count})</h1>
            {
                tasks.tasks.length === 0 ?
                <div class='flex justify-center text-red-700'>No Tasks</div>
                :
                tasks.tasks.map(task => (
                        <div className="flex bg-sky-700 hover:bg-cyan-700 text-white p-4 m-1 rounded-sm justify-between">
                        <div>
                            <div className='text-2xl font-serif overflow-elipses'>{task.taskName}</div>
                            <div className='font-mono text-slate-900'>{task.taskDate}</div>
                        </div>
                        <div className='flex justify-end'>
                            <DeleteIcon className='text-red-600' onClick={()=> handleRemove(task)} />
                        </div>
                                        

            </div>
                ))
            }
            
        </div>
        <div className="hidden md:w-2/6"></div>
    </div> );
}
 
export default Tasks;