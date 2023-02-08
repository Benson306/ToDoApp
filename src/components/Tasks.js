import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = () => {
    return ( <div className="flex justify-center">
        <div className="hidden md:w-2/6"></div>
        <div className="w-full m-1 md:w-3/6 backdrop-blur-sm bg-white/30 rounded-md p-2 md:p-5 mt-2">
            <h1 className='p-3 text-lg'>Tasks</h1>
            <h2 className='flex justify-center ml-10 font-mono'>Complete</h2>
            <div className="flex bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-sm justify-between">
                <div>
                    <div className='text-2xl font-serif overflow-elipses'>Learn Flask</div>
                    <div className='font-mono text-slate-900'>2023-02-08</div>
                </div>
                <div>
                    <input type="checkbox" className="w-5 h-5 rounded" id="" />
                </div>
                <div className='flex justify-end gap-4'>
                    <ModeOutlinedIcon />
                    <DeleteIcon className='text-red-600' />
                </div>
                

            </div>
        </div>
        <div className="hidden md:w-2/6"></div>
    </div> );
}
 
export default Tasks;