const Form = () => {
    return ( <div className="flex justify-center p-2 mt-10 gap-6">
            <input 
                type="text"
                className="p-3 rounded-sm font-mono"
                name="" 
                id="" 
                placeholder="Add a new Task"
                required
            />
            <input 
                type='date'
                className='p-3 rounded-sm'
            />
            <input 
                type="submit"
                className="align-middle bg-purple-900 text-white p-3 rounded-sm"
                value="Add Task" 
            />
    </div> );
}
 
export default Form;