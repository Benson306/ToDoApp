const Form = () => {
    return ( <div className="md:flex justify-center p-2 mt-10 gap-6">
            <input 
                type="text"
                className="p-3 m-1 md:m-0 w-full md:w-3/6 rounded-sm font-mono"
                name="" 
                id="" 
                placeholder="Add a new Task"
                required
            />
            <input 
                type='date'
                className='p-3 m-1 md:m-0 w-full md:w-2/6 rounded-sm'
            />
            <input 
                type="submit"
                className="align-middle bg-purple-900 text-white p-3 m-1 md:m-0  w-full md:w-1/6 rounded-sm"
                value="Add Task" 
            />
    </div> );
}
 
export default Form;