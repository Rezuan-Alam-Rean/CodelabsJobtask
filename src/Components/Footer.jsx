import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#020043] text-white py-4">
            <div className="flex flex-col md:flex-row justify-start md:justify-around items-center space-y-4 md:space-y-0 md:space-x-8 p-10">
                <aside>
                    <div className="mb-10 " >

                        <img src="../../public/Media/logo light.png" alt="pic" />
                    </div>
                    <p className="mb-4">
                        123 Main Street Anytown, USA <br />Postal Code: 12345
                    </p>
                    <p>
                        Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)
                    </p>
                </aside>
                <nav className="md:text-start text-center flex gap-3 flex-col ">

                    <a className="text-white hover:text-gray-400">Home
                    </a>
                    <a className="text-white hover:text-gray-400">About us
                    </a>
                    <a className="text-white hover:text-gray-400">Success Page
                    </a>
                    <a className="text-white hover:text-gray-400">Terms and condition</a>
                </nav>
                <nav className="md:text-start text-center gap-3 flex flex-col">

                    <a className="text-white hover:text-gray-400">Services</a>
                    <a className="text-white hover:text-gray-400">Scheduling</a>
                    <a className="text-white hover:text-gray-400">Contact Us</a>
                    <a className="text-white hover:text-gray-400">Patient Portal</a>
                   
                </nav>
                <nav className="text-center flex flex-col">

                    <a className="text-white hover:text-gray-400">Follow Us</a>
                    <nav className="flex gap-4 mt-4 mb-4 md:place-self-center md:justify-self-end"><a>
                    <FaFacebook size={25} />

                        </a>

                        <a>
                        <FaInstagram  size={25} />

                        </a>
                        <a>
                        <TiSocialLinkedinCircular size={32} />


                        </a>
                        <a>
                        <FaYoutube  size={25} />

                        </a>
                    </nav>
                    <a className="text-white hover:text-gray-400">@docplus 2024</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
