import developer from "../../assets/Business/developers.jpg";
import corporate from "../../assets/Business/corporate.jpg";
import professionals from "../../assets/Business/professional.jpg";
import bankers from "../../assets/Business/banker-work.jpg";

import AreaCard from "./AreaCard";

const ServeArea = () => {
    return (
        <div className="my-8">
            <div className="flex justify-center mb-3">
                <p className="bg-mainBg max-w-fit px-3 py-1 text-mainText font-medium rounded-md ">
                    Types of Users
                </p>
            </div>
            <h1 className="text-center text-4xl font-semibold">
                Across different <span className="text-primary">Profession</span>
            </h1>

            <div className="mx-5 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <AreaCard img={developer} title="Developer" />
                <AreaCard img={corporate} title="Corporate" />
                <AreaCard img={professionals} title="professional" />
                <AreaCard img={bankers} title="Bankers" />
            </div>
        </div>
    );
};

export default ServeArea;
