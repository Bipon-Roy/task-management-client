import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-mainBg mt-10 bg-[#252323]">
            <footer className="footer items-center p-4  text-white mt-8 max-w-7xl mx-auto">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2023 Bipon Roy - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="flex gap-2 justify-center mt-2">
                        <a
                            href="https://github.com/Bipon-Roy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="text-2xl hover:text-primary" />
                        </a>
                        <a
                            href="https://twitter.com/bipon_dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiTwitterXFill className="text-2xl hover:text-primary" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bipon-roy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-2xl hover:text-primary" />
                        </a>
                        <a
                            href="https://www.facebook.com/bipon.r"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="text-2xl hover:text-primary" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};
export default Footer;
