import { useState, useRef, useEffect } from "react";

function Task({ task: { id, name, complete, highlight }, updateTaskComplete, deleteTask, updateTaskName }) {
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef(null);
    
    let taskClass;
    if (highlight === true) {
        taskClass = 'task task-highlight'
    } else {
        taskClass = 'task'
    }

    let nameClass;
    if (complete === true) {
        nameClass = 'nameText nameText-complete'
    } else {
        nameClass = 'nameText'
    }

    function edit() {
        if (isEdit === true) {
            updateTaskName(id, inputRef.current.value)
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    };

    useEffect(() => {
        if (isEdit === true)
        {
            inputRef.current.value = name;
        }
    }, [isEdit]);
    
    return (
        <li className={taskClass}>
            {
                !isEdit &&
                <>
                    <input className='checkbox' type='checkbox' id={id} name='taskCheckbox' checked={complete} onChange={() => { updateTaskComplete(id, !complete); }} />
                    <label htmlFor={id} className={nameClass}>{name}</label>
                </>
            }
            {
                isEdit &&
                <input className='editingTask' ref={inputRef} />
            }  
             <button className='taskEditingButton' onClick={() => { edit(); }}>
                <img className='taskButtonIcon' src={`${process.env.PUBLIC_URL}/img/icon-editing.png`} />
            </button> 
            <button className='taskDeleteButton' onClick={() => { deleteTask(id); }}>
                <img className='taskButtonIcon' src={`${process.env.PUBLIC_URL}/img/icon-delete.png`} />
            </button>
        </li>
    );
}

export default Task;