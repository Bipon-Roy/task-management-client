import { FaRegEdit } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
    const { _id, title, priority, date, descriptions } = task;

    return (
        <>
            <div className="mb-4">
                <div className="flex items-center gap-2">
                    <h1 className="font-semibold">{title}</h1>
                    <Link to={`/updateTask/:${_id}`}>
                        <button className="bg-primary p-1 rounded-full text-white">
                            <FaRegEdit />
                        </button>
                    </Link>
                </div>
                <p className="text-xs bg-mainBg font-medium pl-1 pr-4 rounded-full max-w-fit">
                    Priority: <span className="capitalize">{priority}</span>
                </p>
                <div>
                    <p className="">{descriptions}</p>
                    <p className="text-sm">{date.split("T")[0]}</p>
                </div>
            </div>
        </>
    );
};

export default TaskCard;
