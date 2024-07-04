
const Testimonial = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 mb-20">
            <div>
                    <p className=" w-32  flex justify-center items-center px-4 gap-1 list-none rounded-full  py-2 font-medium text-black border-2 border-[hsl(240,2%,10%)]">


                    Testimonial

                    </p>

                    <p className="text-4xl text-black font-medium mt-3 mb-6">What they say about us</p>

                </div>
            <div className="grid md:grid-cols-3 grid-cols-1 ">

                <div className="w-[371px] h-[251px] bg-[#FFFFF5] shadow-lg rounded-3xl p-6 ">
                    <p className="text-xl text-black font-medium">Expertise and Compassion Combined</p>
                    <p className="text-sm font-light mt-3 mb-4">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <img src="../../public/Media/Group 35.png" alt="" />

                </div>
                <div className="w-[371px] h-[251px] bg-[#FFFFF5] shadow-lg rounded-3xl p-6 ">
                    <p className="text-xl text-black font-medium">Expertise and Compassion Combined</p>
                    <p className="text-sm font-light mt-3 mb-4">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <img src="../../public/Media/Group 35 (1).png" alt="" />

                </div>
                <div className="w-[371px] h-[251px] bg-[#FFFFF5] shadow-lg rounded-3xl p-6 ">
                    <p className="text-xl text-black font-medium">Expertise and Compassion Combined</p>
                    <p className="text-sm font-light mt-3 mb-4">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <img src="../../public/Media/Group 35 (2).png" alt="" />

                </div>

            </div>
        </div>
    );
};

export default Testimonial;