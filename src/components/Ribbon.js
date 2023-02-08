import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Form from './Form';

const Ribbon = () => {
    return ( 
        <div class='flex justify-center'>
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 w-4/6 to-slate-700 p-10 rounded-md">

                <div className="flex justify-center gap-52 align-middle">
                    <h1 className="font-mono text-4xl text-white">ToDoApp</h1>
                    <WbSunnyOutlinedIcon fontSize='medium' style={{color:"white"}}/>
                    <DarkModeOutlinedIcon fontSize='medium' style={{color:"white"}}/>
                </div>

                <Form />

            </div> 
    </div>
    );
}
 
export default Ribbon;