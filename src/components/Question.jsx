import { FaCarSide } from "react-icons/fa6";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import { FaClipboardCheck } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";
const Question = () => {
    return (
        <div className="mt-10  container px-6 py-10 mx-auto">


            <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                <div className="shadow-md bg-black rounded-lg hover:scale-[1.05] transition-all px-8 py-5 ">
                    <div className="text-center flex justify-center items-center">
                     
                <h1 className=" text-center text-6xl"><FaCarSide />
                </h1>
                    </div>
                    <h2 className=" mb-3 text-xl md:text-2xl font-semibold">Wide Variety of Cars</h2>
                    <p className="text-gray-400">A wide variety of cars offers something for every type of driver, catering to diverse needs and preferences. From compact hatchbacks designed for urban efficiency to luxurious sedans that emphasize comfort and style.</p>
                </div>
                <div className="shadow-md bg-black rounded-lg hover:scale-[1.05] transition-all px-8 py-5 ">
                    <div className="text-center flex justify-center items-center">
                     
                <h1 className=" text-center text-6xl"><HiOutlineDocumentCurrencyDollar />
                </h1>
                    </div>
                    <h2 className=" mb-3 text-xl md:text-2xl font-semibold">Affordable Prices</h2>
                    <p className="text-gray-400">Affordable car prices make vehicle ownership more accessible to a broader range of people, providing convenience and freedom of travel. With competitive pricing and financing options, </p>
                </div>
                <div className="shadow-md hover:scale-[1.05] transition-all bg-black rounded-lg px-8 py-5 ">
                    <div className="text-center flex justify-center items-center  ">
                     
                <h1 className=" text-center text-6xl"><FaClipboardCheck />
                </h1>
                    </div>
                    <h2 className=" mb-3 text-xl md:text-2xl font-semibold">Easy Booking Process</h2>
                    <p className="text-gray-400">Our car rental website offers an easy and hassle-free booking process designed for your convenience. Simply browse through our wide selection of vehicles, choose the one that suits .</p>
                </div>
               
              <div className="shadow-md hover:scale-[1.05] transition-all bg-black rounded-lg px-8 py-3 ">
                    <div className="text-center flex justify-center items-center">
                     
                <h1 className="mt-2 text-center text-6xl"><IoWomanSharp />
                </h1>
                    </div>
                    <h2 className=" mb-3 text-xl md:text-2xl font-semibold">Customer Support</h2>
                    <p className="text-gray-400">At Our Car Rental  , we prioritize your satisfaction and peace of mind. Our dedicated customer support team is here to assist you with any inquiries, whether it’s about vehicle details, financing options, or after-sales services.</p>
                </div>
                
            </div>

           




            
        </div>
    );
};

export default Question;
