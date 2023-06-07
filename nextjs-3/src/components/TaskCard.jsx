"use client";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";
export const TaskCard = ({ task }) => {
    const router = useRouter();
    const { deleteTask } = useTasks();
    return (
        <div className="bg-gray-700 cursor-pointer px-20 py-5 m-2 flex justify-between">
            <div className="py-5">
                <h1 className="m-1 mb-4">{task.title}</h1>
                <p className="text-gray-300 m-1">{task.description}</p>
            </div>

            <div className="flex flex-col justify-center">
                <button
                className="bg-red-700 hover:bg-red-500 px-3 py-1 inline-flex items-center m-1"
                    onClick={() => {
                        const accept = window.confirm("Are you sure?");
                        if (accept) {
                            deleteTask(task.id);
                            toast.success("Task Deleted Successfully");
                        }
                    }}
                >
                    Delete
                </button>
                <button
                className="bg-orange-500 hover:bg-orange-400 px-3 py-1 inline-flex items-center m-1"
                    onClick={() => {
                        router.push(`/edit/${task.id}`);
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};
