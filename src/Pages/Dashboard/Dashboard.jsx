import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Swal from "sweetalert2";
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

        const task = {
            userName: user.displayName,
            email: user.email,
            title,
            descriptions,
            priority,
            date,
        };

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
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-4 ">
                    <div className="max-w-2xl mx-auto mt-8 border p-10 space-y-4">
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
                                className="input input-bordered focus:outline-none"
                                {...register("priority", { required: true })}
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                            {errors.priority && (
                                <span className="text-red-600 mt-1 ml-2">Priority is required</span>
                            )}
                        </div>

                        <div className="form-control">
                            <input
                                className="bg-primary py-3 rounded-md font-semibold text-white"
                                type="submit"
                                value="Add Ta"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
