import aboutPhoto from "../../assets/Advertisement.png";

const About = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <h1 className="text-center font-semibold text-4xl ">
                    About <span className="text-primary ">Us</span>
                </h1>
                <div className="grid lg:grid-cols-2 gap-8 pt-8 pb-10 mx-5 lg:mx-0 ">
                    <div className="" data-aos="fade-right">
                        <img
                            src={aboutPhoto}
                            className="h-full w-full rounded"
                            alt="Hotels Photo"
                        />
                    </div>
                    <div className="text-black space-y-3" data-aos="fade-left">
                        <h1 className="text-2xl font-bold  text-center">
                            Empowering Productivity - Your Ultimate Task Management Solution!
                        </h1>
                        <p className="font-medium">
                            Welcome to Task-Management-System, where innovation meets efficiency. We
                            are dedicated to simplifying your task management experience through a
                            powerful MERN (MongoDB, Express.js, React.js, Node.js) stack web
                            application. Our team is passionate about crafting a solution that
                            streamlines your workflow, enabling you to focus on what matters most —
                            achieving your goals.
                        </p>
                        <p className="text-primary  text-2xl font-bold text-center">
                            Why Choose Us?
                        </p>
                        <div className="space-y-4">
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Intuitive User Interface:
                                </span>
                                Experience task management like never before with our clean and
                                intuitive user interface. Effortlessly organize your tasks, set
                                priorities, and collaborate with team members, all in a visually
                                appealing environment.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Customization for Your Workflow:
                                </span>
                                We understand that every user and team is unique. That&apos;s why
                                [Your App Name] allows you to customize workflows, create task
                                categories, and tailor the system to match your specific needs and
                                preferences.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Security and Reliability:
                                </span>
                                Your data&apos;s security is our top priority. With robust security
                                measures and regular backups, you can trust [Your App Name] to keep
                                your information safe and available whenever you need it.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Responsive Customer Support:
                                </span>
                                Have questions or need assistance? Our dedicated customer support
                                team is here 24/7 to provide timely and helpful solutions. Your
                                success is our priority, and we&apos;re committed to ensuring a
                                smooth and satisfying experience with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
