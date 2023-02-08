import Form from './Form';

const Ribbon = () => {
    return ( 
        <div class='flex justify-center'>
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 w-full md:w-4/6 to-slate-700 p-5 md:p-10 rounded-sm">

                <div className="flex justify-center gap-52 align-middle">
                    <h1 className="font-mono text-4xl text-white">ToDo App</h1>
                </div>

                <Form />

            </div> 
    </div>
    );
}
 
export default Ribbon;