import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, updateTask, deleteTask } from "../features/tasks/taskSlice";
import Column from "./Column";
import TaskFormModal from "./TaskFormModal";

const Board = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);
    const [showModal, setShowModal] = useState(false);
    const [editTaskData, setEditTaskData] = useState(null);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDrop = (taskId, newStatus) => {
        const task = tasks.find((t) => t.id === taskId);
        if (task && task.status !== newStatus) {
            dispatch(updateTask({ ...task, status: newStatus }));
        }
    };

    const openEditModal = (task) => {
        setEditTaskData(task);
        setShowModal(true);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4 flex-col xs:flex-row">
                <h1 className="text-2xl font-bold pb-2 xs:pb-auto">Kanban Board</h1>
                <button onClick={() => {
                    setEditTaskData(null);
                    setShowModal(true);
                }} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Add New Task
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["To Do", "In Progress", "Done"].map((status, index) => (
                    <Column key={status} title={status} tasks={tasks} IndexVal={index} onDrop={handleDrop} onEdit={openEditModal} onDelete={(id) => dispatch(deleteTask(id))} />
                ))}
            </div>
            {showModal && (
                <TaskFormModal
                    onClose={() => setShowModal(false)}
                    onAdd={(task) => dispatch(addTask(task))}
                    onUpdate={(task) => dispatch(updateTask(task))}
                    initialData={editTaskData}
                />
            )}
        </div>
    );
};

export default Board;
