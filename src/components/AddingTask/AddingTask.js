import { useRef } from 'react';

function AddingTask({ addTask }) {
    const inputRef = useRef(null);

    function onClick() {
        addTask(inputRef.current.value);
        inputRef.current.value = null; 
    }

     return (
         <div className='addingTask'>
            <input className='addingTaskInput' placeholder="Enter todo here" ref={inputRef} />
            <button className='addingTaskButton' onClick={onClick}>Submit</button>
         </div>
     );
 }

 export default AddingTask;