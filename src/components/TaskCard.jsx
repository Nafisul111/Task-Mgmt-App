import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskCard = ({ task, onEdit, onDelete }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", task.id);
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            className="flex justify-between bg-white p-3 rounded shadow mb-2 cursor-grab group"
        >
            <div className="flex flex-col">
                <h3 className="font-bold text-lg">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="flex gap-2 items-start">
                <FontAwesomeIcon icon={faEdit} onClick={() => onEdit(task)} className="text-blue-500 cursor-pointer" />
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(task.id)} className="text-red-500 cursor-pointer" />
            </div>
        </div>
    );
};

export default TaskCard;
