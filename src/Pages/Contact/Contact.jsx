const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="mx-6 md:mx-4 lg:mx-0 flex flex-col md:flex-row gap-4 lg:gap-6">
                <div className="w-full border p-8">
                    <form className=" space-y-4">
                        <h1 className="font-bold text-lg text-center mb-4">
                            Send Your Opinion To Us
                        </h1>

                        <div className="form-control 2">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <textarea
                                rows="8"
                                name="opinion"
                                type="number"
                                placeholder="Your Opinion"
                                className="pt-1 pl-4 rounded-lg border w-full border-[#D2D4D7] focus:outline-none"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className=" py-2 bg-primary uppercase font-medium text-white w-full rounded">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mapouter w-full">
                    <div className="gmap_canvas">
                        <iframe
                            width="100%"
                            height="510"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Dhaka, Mirpur&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
