const TaskCard = ({ task }) => {
    console.log(task);
    const { title, priority, date, descriptions } = task;
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{priority}</p>
            </div>
            <p>{descriptions}</p>
            <p>{date}</p>
        </div>
    );
};

export default TaskCard;
