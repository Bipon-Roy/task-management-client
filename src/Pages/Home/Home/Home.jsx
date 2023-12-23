import ServeArea from "../../Availablity/ServeArea";
import Banner from "../Banner/Banner";
import SupportedOS from "../SupportedOS/SupportedOS";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <SupportedOS />
                <ServeArea />
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;
