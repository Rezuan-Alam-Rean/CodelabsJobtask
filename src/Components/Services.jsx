import { HiMiniArrowUpRight } from "react-icons/hi2";

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20 mb-20 ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">

                <div>
                    <div className="w-3/4 ">

                        <div className="">
                            <p className=" w-28 mt-5 mb-8 flex justify-center items-center px-4 gap-1 list-none rounded-full  py-2 font-medium text-black border-2 border-[hsl(240,2%,10%)]">


                            Service

                            </p>

                            <p className="text-4xl text-black font-medium mt-3 mb-6">Empowering Health, Enriching Lives</p>

                        </div>

                        <p className="text-neutral-500  leading-8 capitalize self-stretch mt-5 ">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                        <div>
                            <button className=" bg-amber-300 justify-center items-center btn  flex gap-1 mt-6 rounded-lg px-4 py-2 font-medium text-[#020043] border-2 border-[#020043]">


                            Appointment
                                <div className="items-center justify-center flex">
                                    <HiMiniArrowUpRight size={20} />

                                </div>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="card rounded-3xl  w-full shadow-xl   ">
                        <figure ><img className="w-full rounded-3xl"  src="../../public/Media/Rectangle 27-2.png" alt="offers" /></figure>
                      
                            <div className="text-white rounded-3xl z-10 shadow-2xl  bg-[#2d2b65] opacity-80 w-96 bottom-5 left-4 absolute border-white p-4">

                                <p className="text-2xl ">Advanced Technology</p>
                                <div className="flex ">

                                <p className="font-light mt-3 text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                <button className="btn btn-circle bg-amber-400 mt-7"> <HiMiniArrowUpRight size={20} /></button>
                                </div>
                            </div>
                       
                    </div>
                <div className="card rounded-3xl  w-full shadow-xl   ">
                        <figure ><img className="w-full rounded-3xl"  src="../../public/Media/Rectangle 27-1.png" alt="offers" /></figure>
                      
                            <div className="text-white rounded-3xl z-10 shadow-2xl  bg-[#2d2b65] opacity-80 w-96 bottom-5 left-4 absolute border-white p-5">

                                <p className="text-2xl ">Online Doctor Meet</p>
                                <div className="flex ">

                                <p className="font-light mt-3 text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                <button className="btn btn-circle bg-amber-400 mt-7"> <HiMiniArrowUpRight size={20} /></button>
                                </div>
                            </div>
                       
                    </div>
                <div className="card rounded-3xl  w-full shadow-xl   ">
                        <figure ><img className="w-full rounded-3xl"  src="../../public/Media/Rectangle 27.png" alt="offers" /></figure>
                      
                            <div className="text-white rounded-3xl z-10 shadow-2xl  bg-[#2d2b65] opacity-80 w-96 bottom-5 left-4 absolute border-white p-5">

                                <p className="text-2xl ">Consultancy your health</p>
                                <div className="flex ">

                                <p className="font-light mt-3 text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                <button className="btn btn-circle bg-amber-400 mt-7"> <HiMiniArrowUpRight size={20} /></button>
                                </div>
                            </div>
                       
                    </div>
               
               
                

            </div>
        </div>
    );
};

export default Services;