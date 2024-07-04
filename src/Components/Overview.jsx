
const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20 mb-20">

            <div className="md:h-[330px] relative ">

          
                <p className="text-center text-black font-semibold text-5xl md:absolute left-1/3  md:w-[530px] ">Comprehensive Care for Every Patient</p>
          

            <div className=" grid md:grid-cols-5  grid-cols-1 gap-8 ">

                <div className="bg-[#FBFBFB]  rounded-3xl shadow-xl  py-5 p-4">
                    <h1 className="text-4xl font-bold pt-5 mb-3 text-center">90%</h1>
                    <p className="text-gray-600 w-40 mx-auto text-center">Patient satisfaction rate, reflecting our commitment.</p>
                    <div className="mt-4 flex justify-center">
                        
                        <div className="">
                            <img src="../../public/Group 12.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] shadow-lg rounded-3xl p-4 mt-32 h-48">
                    <h1 className="text-4xl font-bold text-start">500+</h1>
                    <p className="text-gray-600 text-start">Board-certified doctors</p>
                    <div className="mt-4">
                        
                        <div className=" flex justify-end">
                            <img src="../../public/contract (1) 1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFf] shadow-lg rounded-3xl p-4 mt-36 h-40">
                    <div className="flex gap-4">

                    <h1 className="text-4xl font-bold text-start">4.8</h1>
                    <img src="../../public/fi-sr-star.png" alt="" />
                    </div>
                    <p className="text-gray-600 text-start">Over 20,000 Patient</p>
                    <div className="mt-4">
                       <img src="../../public/Group 7.png" alt="" />
                        
                    </div>
                </div>
               
                <div className="bg-[#FFFFF5] shadow-lg rounded-3xl p-4 mt-32 h-48">
                    <h1 className="text-4xl font-bold text-start">$5000</h1>
                    <p className="text-gray-600 text-start">Money spend
                    for poor patient</p>
                    <div className="mt-4">
                        
                        <div className=" flex justify-end">
                            <img src="../../public/Group.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBFBFB] rounded-3xl shadow-xl py-5 p-4">
                    <h1 className="text-4xl font-bold  mt-4 text-center">50+</h1>
                    <p className="text-gray-600 w-40 mt-4 mx-auto text-center">Free lession video 
                    for patient</p>
                    <div className="mt-4 flex justify-center">
                        
                        <div className="pt-8">
                            <img src="../../public/Group (1).png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Overview;