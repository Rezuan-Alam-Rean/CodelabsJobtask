import { HiMiniArrowUpRight } from "react-icons/hi2";


const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">


            <nav className="flex items-center justify-between font-medium bg-white px-4 py-2 text-black">
                <div className=" " >

                    <img src="../../public/Media/logo dark.png" alt="pic" />
                </div>
                <ul className="flex items-center justify-between gap-6 text-slate-900">
                    <li className="cursor-pointer  rounded-full   py-2 text-black ">Home</li>
                    <li className="cursor-pointer  rounded-full  py-2 text-black ">Services</li>
                    <li className="cursor-pointer  rounded-full  py-2 text-black ">Blog</li>
                    <li className="cursor-pointer  rounded-full  py-2 text-black ">About</li>

                </ul>
                <div>
                    <li className="cursor-pointer flex gap-1 list-none rounded-lg px-6 py-2 font-medium text-black border-2 border-black">


                        Appointment
                        <div className="items-center justify-center flex">
                            <HiMiniArrowUpRight size={20} />

                        </div>
                    </li>

                </div>
            </nav>



        </div>
    );
};

export default Navbar;