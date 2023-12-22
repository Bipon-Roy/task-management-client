import { Link } from "react-router-dom";
import bannerImg from "../../../assets/BannerVector.png";
import useAuth from "../../../Hooks/useAuth";
const Banner = () => {
    const { user } = useAuth;
    return (
        <div
            className="min-h-[50vh] lg:min-h-[70vh] flex items-center"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url(https://i.ibb.co/807p5bB/Banner.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto ">
                <div className="mt-8 mx-5 text-mainText md:w-1/2 lg:w-full text-white">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                        Unlock Seamless
                        <span className="text-primary"> Task Management Solutions.</span>
                    </h1>
                    <p className="md:w-3/4 font-medium text-sm md:text-base mb-4">
                        Effortlessly manage your workforce and optimize Daily tasks with our
                        intuitive Task Management Services. Elevate productivity and enhance
                        employee satisfaction with our tailored solutions.
                    </p>
                    <div className="mt-8">
                        {user ? (
                            <Link
                                to="/dashboard/home"
                                className="border-2 border-primary text-mainText px-10 py-2 text-xl font-semibold"
                            >
                                Explore
                            </Link>
                        ) : (
                            <Link
                                to="/signup"
                                className="border-2 border-primary text-mainText px-10 py-2 text-xl font-semibold"
                            >
                                Explore
                            </Link>
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-full">
                    <img src={bannerImg} alt="#TaskManagementThumbnail" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
