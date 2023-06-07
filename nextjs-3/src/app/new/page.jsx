"use client";
import React from "react";
import { useEffect } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
    const { tasks, createTask, updateTask } = useTasks();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
            toast.success("Task updated Sucessfully");
        } else {
            const { title, description } = data;
            createTask(title, description);
            toast.success("Task created Sucessfully");
        }

        router.push("/");
    });

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find((task) => task.id === params.id);
            if (taskFound) {
                setValue("title", taskFound.title);
                setValue("description", taskFound.description);
            }
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-full">
            <form onSubmit={onSubmit} className="bg-gray-700 p-10">
                <h2>New Task</h2>
                <input
                    type="text"
                    placeholder="Write a title"
                    className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
                    {...register("title", { required: true })}
                />
                {errors.title && (
                    <span className="block text-red-400 mb-2">
                        This field is required
                    </span>
                )}
                <textarea
                    placeholder="Write a description"
                    className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
                    {...register("description", { required: true })}
                />
                {errors.description && (
                    <span className="block text-red-400 mb-2">
                        This field is required
                    </span>
                )}
                <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
                    Save
                </button>
            </form>
        </div>
    );
}

export default Page;
