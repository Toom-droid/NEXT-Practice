"use client";
import { TaskCard } from "@/components/TaskCard";
import { useTasks } from "@/context/TasksContext";
function page() {
    const { tasks } = useTasks();
    return (
        <div className="flex justify-center">
            <div className="w-7/12">
                {tasks.map((task) => (
                    <TaskCard task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
}

export default page;
