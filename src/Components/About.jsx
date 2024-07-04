import { HiMiniArrowUpRight } from "react-icons/hi2";

const About = () => {
    return (

        <div className="max-w-7xl mx-auto mt-5 mb-5">

            <div className="hero  bg-white">
                <div className="hero-content flex-col lg:flex-row">


                    <div className=" md:w-1/2    ">

                        <div className="md:w-4/5">

                            <div className="">
                                <p className=" w-32 mt-5 mb-8 flex justify-center items-center px-4 gap-1 list-none rounded-full  py-2 font-medium text-black border-2 border-[hsl(240,2%,10%)]">


                                    Who we are

                                </p>

                                <p className="text-4xl text-black font-medium mt-3 mb-6">We Help To Get Soultions</p>

                            </div>

                            <p className="text-neutral-500 text-base leading-8 capitalize self-stretch mt-5 max-md:max-w-full max-md:mt-10">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve..</p>

                            <div>
                                <button className=" bg-amber-300 justify-center items-center btn  flex gap-1 mt-6 rounded-lg px-4 py-2 font-medium text-[#020043] border-2 border-[#020043]">


                                    Learn more
                                    <div className="items-center justify-center flex">
                                        <HiMiniArrowUpRight size={20} />

                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className=" relative md:h-[450px] h-[400px]  p-5 md:w-1/2  ">
                        <img src="../../public/Media/Rectangle 24.png" className="rounded-lg shadow-2xl w-full md:h-80 " />
                        <div className="rounded-3xl shadow-2xl bottom-5 bg-[#343268]  w-80 md:left-[-40px] absolute border-white">
                            <div className="text-white p-5">

                                <p className="text-xl ">Our mission is simple</p>
                                <p className="font-light mt-3 text-sm">To provide high-quality healthcare services that are accessible, personalized, and patient-centered..</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>



    );
};

export default About;

