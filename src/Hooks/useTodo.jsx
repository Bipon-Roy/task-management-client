import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTodo = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: todo = [], refetch: reloadTodoList } = useQuery({
        queryKey: ["todo", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todoList?email=${user.email}`);
            return res.data;
        },
    });
    return [reloadTodoList, todo];
};

export default useTodo;
