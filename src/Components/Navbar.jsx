import { HiMiniArrowUpRight } from "react-icons/hi2";

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


import  logo    from "../assets/Pictures/logo dark.png";

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (

        <div className="max-w-7xl mx-auto">
            <nav className="flex items-center font-medium  justify-between bg-white px-8 md:px-0 py-4 text-[#020043] mb-2">


                <div className=" " >

                    <img src={logo} alt="pic" />
                </div>
                <ul className="hidden items-center justify-between gap-5 md:flex">
                    <li className="group flex  cursor-pointer flex-col">
                        Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        Services<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>


                <div>
                    <li className="cursor-pointer flex gap-1 list-none rounded-lg px-6 py-2 font-medium text-[#020043] border-2 border-[#020043]">


                        Appointment
                        <div className="items-center justify-center flex">
                            <HiMiniArrowUpRight size={20} />

                        </div>
                    </li>

                </div>

                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-slate-200  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <li className="cursor-pointer  px-6 py-2 text-[#020043] rounded-t-lg hover:bg-slate-800 ">
                                Home
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-[#020043] hover:bg-slate-800 ">
                                Services
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-[#020043] hover:bg-slate-800 ">
                                About
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-[#020043] hover:bg-slate-800 ">
                                Contact
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>


    );

};

export default Navbar;