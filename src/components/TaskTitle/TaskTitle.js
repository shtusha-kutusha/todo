function TaskTitle( { tasks } ) {
    const incomplete = tasks.filter(({ complete }) => !complete).length;
    return (
        <div className='taskTitle'>
            Todos ({tasks.length}) - {tasks.length - incomplete} / {incomplete}
        </div>
    );
}

export default TaskTitle;