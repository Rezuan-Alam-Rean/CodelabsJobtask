

const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 mb-8">
            <div>

                <div>
                    <p className=" w-20 flex justify-center items-center  gap-1 list-none rounded-full  py-2 font-medium text-black border-2 border-[hsl(240,2%,10%)]">


                        Faq

                    </p>

                    <p className="text-4xl text-black font-medium mt-3 mb-6">Frequntly Asked Question</p>

                </div>

                <div className="collapse collapse-arrow  bg-[#fffff5] mt-2 mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl shadow-md font-medium"> What are your office hours?</div>
                    <div className="collapse-content">
                        <p className=" pt-3 font-light">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#fffff5] mt-2 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p className=" font-light">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#fffff5] mt-2 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p className=" font-light">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#fffff5] mt-2 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p className=" font-light">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#fffff5] mt-2 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p className=" font-light">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;