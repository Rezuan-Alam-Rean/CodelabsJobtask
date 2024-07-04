import { HiMiniArrowUpRight } from "react-icons/hi2";

const DiscountBanner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mb-8 mt-8 ">
                <div className=" relative mt-8 flex">


                    <img className=" h-[470px] rounded-[50px] w-full    " src="../../public/Media/Rectangle 32.png" alt="" />


                    <div className=" w-full h-[470px]  rounded-[50px] opacity-90    bg-gradient-to-r from-[#020043] to-[#0200434c]   absolute     ">
                        <div className="flex p-12  justify-between">

                            <div className="space-y-8   md:w-96  ">
                                <h2 className="font-bold text-white mt-16 text-4xl md:text-5xl">Get Your
                                    First Appointment
                                    at 50% Off!</h2>

                                <div className="md:flex gap-5  ">
                                    <button className=" bg-amber-300 justify-center mb-4 items-center btn  flex gap-1 list-none rounded-lg px-4 py-2 font-medium text-[#020043] border-2 border-[#020043]">


                                        Appointment
                                        <div className="items-center justify-center flex">
                                            <HiMiniArrowUpRight size={20} />

                                        </div>
                                    </button>
                                    <button className=" z-10 btn   gap-1 list-none rounded-lg px-4 py-2 font-medium text-black border-2 border-[hsl(240,10%,96%)]">


                                    Learn More
                                    <div className="items-center justify-center flex">
                                            <HiMiniArrowUpRight size={20} />

                                        </div>
                                      
                                    </button>

                                </div>

                            </div>

                            <div className=" " >

                                <img src="../../public/Media/logo light.png" alt="pic" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DiscountBanner;