import { useEffect, useState } from "react";
import Task from "../Task/Task";

function TaskList({ data, updateTaskComplete, deleteTask, updateTaskName }) { 
    const [findResult, setFindResult] = useState(true);

    useEffect(() => {
        if (data === null || data.length === 0) {
            setFindResult(false);
        } else {
            setFindResult(true);
        }
    }, [data]);

    return (
        <>
            {
                findResult &&
                <>
                    <ul className='taskList'>
                        {data.map((task) => <Task
                                                task={task}
                                                updateTaskName={updateTaskName}
                                                deleteTask={deleteTask} 
                                                updateTaskComplete={updateTaskComplete}
                                                key={task.id} /> )}
                    </ul>  
                </>
            }  
            {
                !findResult &&
                <div>Ничего не найдено</div>
            }
        </>
    );
}

export default TaskList;