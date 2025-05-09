import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onDrop, IndexVal, onEdit, onDelete }) => {
    const handleDrop = (e) => {
        const taskId = e.dataTransfer.getData("text/plain");
        onDrop(taskId, title);
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="bg-gray-100 p-4 rounded shadow min-h-[300px] group relative"
        >
            <h2 className={`text-xl font-semibold mb-2 ${IndexVal === 0 ? "text-red-500" :
                IndexVal === 1 ? "text-yellow-500" : "text-green-500"
                }`}>
                {title}
            </h2>

            {tasks
                .filter((t) => t.status === title)
                .map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
        </div>
    );
};

export default Column;
