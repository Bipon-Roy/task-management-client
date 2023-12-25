import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useOngoing = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: ongoing = [], refetch: reloadOngoingList } = useQuery({
        queryKey: ["ongoing", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/ongoingList?email=${user.email}`);
            return res.data;
        },
    });
    return [reloadOngoingList, ongoing];
};

export default useOngoing;
