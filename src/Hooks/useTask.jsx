import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        },
    });
    return [refetch, tasks];
};

export default useTask;
