import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { CgCloseO } from "react-icons/cg";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Dashboard = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [date, setDate] = useState(null);

    const axiosSecure = useAxiosSecure();

    const handleDateValue = (date) => {
        setDate(date);
    };

    const onSubmit = (data) => {
        const title = data.title;
        const descriptions = data.descriptions;
        const priority = data.priority;
        const status = data.status;

        const task = {
            userName: user.displayName,
            email: user.email,
            title,
            descriptions,
            priority,
            date,
            status,
        };
        toast.success("Task Successfully Added!");
        // axiosSecure.post("/tasks", task).then((res) => {
        //     if (res.data.insertedId) {
        //         Swal.fire({
        //             icon: "success",
        //             title: "Welcome!",
        //             text: "Task Added Successfully!",
        //         });
        //         reset();
        //         // refetch();
        //     }
        // });
        console.log(task);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="border p-4 mt-8 flex justify-center items-center">
                <button
                    className="bg-primary py-1 px-8 rounded-md font-medium shadow-2xl text-white"
                    onClick={() => document.getElementById("my_modal_4").showModal()}
                >
                    Add Task
                </button>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-3xl relative">
                    <Toaster />
                    <form onSubmit={handleSubmit(onSubmit)} className="m-4">
                        <div className="max-w-2xl mx-auto md:p-8 space-y-4">
                            <div className="form-control ">
                                <input
                                    type="text"
                                    {...register("title", { required: true })}
                                    placeholder="Task Title"
                                    className="input input-bordered focus:outline-none"
                                />

                                {errors.title && (
                                    <span className="text-red-600 mt-1 ml-2">
                                        Title Hours is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control ">
                                <textarea
                                    rows="4"
                                    type="text"
                                    {...register("descriptions", { required: true })}
                                    placeholder="Description"
                                    className="border border-[#D2D4D7] rounded-lg focus:outline-none pt-3 pl-4"
                                />

                                {errors.descriptions && (
                                    <span className="text-red-600 mt-1 ml-2">
                                        Descriptions Hours is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control ">
                                <DatePicker
                                    selected={date}
                                    onChange={handleDateValue}
                                    placeholderText="Select Deadline"
                                    className="input input-bordered focus:outline-none w-full"
                                />
                            </div>
                            <div className="form-control">
                                <select
                                    className="border border-[#D2D4D7] rounded-lg py-3 focus:outline-none"
                                    {...register("priority", { required: true })}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                                {errors.priority && (
                                    <span className="text-red-600 mt-1 ml-2">
                                        Priority is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <select
                                    className="border border-[#D2D4D7] rounded-lg py-3 focus:outline-none"
                                    {...register("status", { required: true })}
                                >
                                    <option value="">Select Status</option>
                                    <option value="todo">To-Do</option>
                                    <option value="ongoing">Ongoing</option>
                                </select>
                                {errors.status && (
                                    <span className="text-red-600 mt-1 ml-2">
                                        Status is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <input
                                    className="bg-primary py-3 rounded-md font-semibold text-white"
                                    type="submit"
                                    value="Add Task"
                                />
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog" className="absolute top-0 right-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="p-2 md:p-3">
                                <CgCloseO className="text-2xl md:text-3xl text-red-600" />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="grid grid-cols-3 mt-8">
                <div className="w-[400px] h-[500px] p-4 border">todo</div>
                <div className="w-[400px] h-[500px] p-4 border">ongoing</div>
                <div className="w-[400px] h-[500px] p-4 border">completed</div>
            </div>
        </div>
    );
};

export default Dashboard;
