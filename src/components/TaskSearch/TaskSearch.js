import { useRef } from "react";

function TaskSearch({ searchTask, resetTasks }) {
    const inputRef = useRef(null);

    function reset() {
        inputRef.current.value = null;
        resetTasks();
    }

    function search() {
        if (inputRef.current.value !== '') {
            searchTask(inputRef.current.value);
        }
    }

    return (
        <div className='taskSearch'>
            <input className='findTaskInput' placeholder='Search' ref={inputRef} />
            <button className='buttonSearch' onClick={search}>Find</button>  
            <button className='searchReset' onClick={reset}>Reset</button>                 
        </div>
    )
}

export default TaskSearch;