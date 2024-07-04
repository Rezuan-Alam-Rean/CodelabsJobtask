import  img1    from "../assets/Pictures/Rectangle 5.png";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className=" relative mt-8 flex">

            
                <img className=" h-[470px] rounded-[50px] w-full    " src={img1} alt="" />
               

                <div className=" w-full h-[470px]  rounded-[50px] opacity-60    bg-gradient-to-r from-[#00c19e43] to-[#02004382]   absolute     ">
                    
                </div>

            </div>

        </div>
    );
};

export default Banner;