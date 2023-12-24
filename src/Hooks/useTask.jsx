import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        },
    });
    return [refetch, tasks];
};

export default useTask;
